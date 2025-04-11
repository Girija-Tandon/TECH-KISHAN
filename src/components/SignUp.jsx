import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>📝 Sign Up</h2>
      <form>
        <input type="text" placeholder="👤 Name" required />
        <input type="email" placeholder="📧 Email" required />
        <input type="password" placeholder="🔒 Password" required />
        <button type="submit">✅ Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
