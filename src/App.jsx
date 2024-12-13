import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthProvider';
import Login from './views/logged_off/Login';
import Signup from './views/logged_off/Signup';
import Dashboard from './views/logged_in/Dashboard';
import UserProfile from './views/logged_in/UserProfile';
import AdminDashboard from './views/admin/AdminDashboard';
import NotAuthorized from './views/NotAuthorized';
import Header from './components/Header/Header';
import './App.css'

const PrivateRoute = ({ children, role }) => {
  const { loggedInUser } = useAuth();

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  if (role && loggedInUser.role !== role) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
