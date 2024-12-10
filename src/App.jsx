import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/Auth";
import Login from "./views/logged_off/Login";
import Signup from "./views/logged_off/Signup";
import Dashboard from "./views/logged_in/Dashboard";
import UserProfile from "./views/logged_in/UserProfile";
import AdminDashboard from "./views/admin/AdminDashboard";
import NotAuthorized from "./views/NotAuthorized";

const PrivateRoute = ({ children, role }) => {
  const { loggedInUser } = useAuth();

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  // ROLE CONTROL
  if (role && loggedInUser.role !== role) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default function App(){
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Logged-off Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/not-authorized" element={<NotAuthorized />} />

          {/* Logged-in Routes */}
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

          {/* Default path */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};


