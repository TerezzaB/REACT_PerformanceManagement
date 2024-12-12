import { useAuth } from "../../context/Auth";
import { useState } from "react";

export default function Signup(){
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Choose role

  const handleSignup = async () => {
    try {
      await signup(email, password, role);
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};


