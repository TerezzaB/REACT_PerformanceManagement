import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/user/profile/UserInfo";
import LogoutButton from "../components/user/profile/LogoutButton";
import Avatar from "../assets/default-avatar.png"

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
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My Profile</h1>
      {loggedInUser ? (
        <div className="w-full max-w-md rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src={Avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-5"
            />
          </div>

          <UserInfo user={loggedInUser} />
          <hr className="my-8"/>
          <LogoutButton onLogout={handleLogout} />
        </div>
      ) : (
        <p className="text-pink-800">No user is logged in.</p>
      )}
    </div>
  );
}
