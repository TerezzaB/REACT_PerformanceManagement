import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ProfileView() {
  const { loggedInUser, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("Successfully logged out");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Informations</h1>
      {loggedInUser ? (
        <div>
          <p><strong>First Name:</strong> {loggedInUser.first_name}</p>
          <p><strong>Last Name:</strong> {loggedInUser.last_name}</p>
          <p><strong>Email:</strong> {loggedInUser.email}</p>
          <p><strong>Role:</strong> {loggedInUser.role}</p>
          <br />
          <button onClick={handleLogout} className="danger-button">
            Logout
          </button>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
}
