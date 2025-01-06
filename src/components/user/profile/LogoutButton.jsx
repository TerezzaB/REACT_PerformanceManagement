import React from "react";

export default function LogoutButton({ onLogout }) {
  return (
    <button
      onClick={onLogout}
      className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition duration-200"
    >
      Logout
    </button>
  );
}
