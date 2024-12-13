import React from "react";
import { useAuth } from "../../context/AuthProvider";

export default function Dashboard() {
  const { loggedInUser } = useAuth();

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">User Informations</h1>
      {loggedInUser ? (
        <div>
          <p><strong>First Name:</strong> {loggedInUser.first_name}</p>
          <p><strong>Last Name:</strong> {loggedInUser.last_name}</p>
          <p><strong>Email:</strong> {loggedInUser.email}</p>
          <p><strong>Role:</strong> {loggedInUser.role}</p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
}
