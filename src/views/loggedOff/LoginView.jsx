import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function LogIn() {
  const navigate = useNavigate();
  const { login, loggedInUser } = useAuth(); // Funkcia login a prihlásený užívateľ
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Resetovanie chýb
    try {
      await login(email, password); // Login cez AuthProvider
      console.log("Successfully logged in!");
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("Failed to log in. Please check your credentials.");
    }
  };


  // Navigation to dasboard or admin dashboard according to role
  useEffect(() => {
    if (loggedInUser) {
      if (loggedInUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/userdashboard");
      }
    }
  }, [loggedInUser, navigate]);

  const toSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl my-9 font-bold text-gray-700 text-center">Log In</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-200"
        >
          Log In
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?
            <button
              onClick={toSignup}
              className="ms-2 text-pink-500 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
