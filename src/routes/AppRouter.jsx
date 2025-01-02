import React from 'react';
import { AuthProvider, useAuth } from './context/Auth';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Login/Signup
import LoginView from '../views/loggedOff/LoginView';
import SignupView from '../views/loggedOff/SignupView';
import NotAuthorized from '../views/NotAuthorized';

// User
import DashboardView from '../views/user/Dashboard';
// Admin
import AdminDashboard from '../views/admin/AdminDashboard';


export default function AppRouter() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/signup" element={<SignupView />} />
                    <Route path="/not-authorized" element={<NotAuthorized />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <DashboardView />
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
};

