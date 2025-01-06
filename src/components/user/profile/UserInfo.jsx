import React from "react";

export default function UserInfo({ user }) {
  return (
    <div className="space-y-4">
      <p>
        <strong className="text-gray-700">First Name:</strong> {user.first_name}
      </p>
      <p>
        <strong className="text-gray-700">Last Name:</strong> {user.last_name}
      </p>
      <p>
        <strong className="text-gray-700">Email:</strong> {user.email}
      </p>
      <p>
        <strong className="text-gray-700">Role:</strong> {user.role}
      </p>
    </div>
  );
}
