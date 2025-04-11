import React, { useState } from "react";
import "../styles/login.css"; // Ensure you create and style this file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    // ✅ TODO: Add actual authentication logic (API call)
    console.log("Logging in with:", { email, password });

    setError(""); // Clear errors after successful login
  };

  return (
    <div className="login-container">
      <h2>🔑 Login</h2>
      <p>Welcome back! Please sign in to continue.</p>

      {error && <p className="error-message">{error}</p>}

      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;

