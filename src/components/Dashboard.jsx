import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
        <button onClick={() => navigate("/monitoring")}>📊 Monitoring</button>
        <button onClick={() => navigate("/irrigation")}>💧 Irrigation</button>
        <button onClick={() => navigate("/marketplace")}>🛒 Marketplace</button>
        <button onClick={() => navigate("/pest-control")}>🐞 Pest Control</button>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <h2>🌱 Smart Greenhouse</h2>
        <p>🚜 Monitor and control all agricultural activities from one place.</p>

        {/* ✅ Buttons Section */}
        <div className="dashboard-buttons">
          <button className="get-started-btn" onClick={handleGetStarted}>🌍 Get Started</button>
          <button className="watch-demo-btn" onClick={() => window.open("https://youtu.be/RJjXWpvtxCk", "_blank")}>
            🎥 Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
