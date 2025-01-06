import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Login from '../views/loggedOff/LoginView';
import Signup from '../views/loggedOff/SignupView';
import UserDashboard from '../views/user/UserDashboard';
import AdminDashboard from '../views/admin/AdminDashboard';
import NotAuthorized from '../views/NotAuthorized';
import Profile from '../views/ProfileView';

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

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/not-authorized" element={<NotAuthorized />} />
      <Route
        path="/UserDashboard"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
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
  );
}
