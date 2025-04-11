import React from "react";
import "../styles/irrigation.css";

const Irrigation = () => {
  return (
    <section className="irrigation">
      <h2>💦 Smart Irrigation System</h2>
      <p>Optimize water usage and keep your crops healthy with an AI-powered irrigation system.</p>

      <div className="irrigation-cards">
        <div className="card">
          <h3>🌊 Water Level</h3>
          <p>Current: 75%</p>
        </div>
        <div className="card">
          <h3>⏳ Last Irrigation</h3>
          <p>2 hours ago</p>
        </div>
        <div className="card">
          <h3>📅 Next Scheduled</h3>
          <p>In 3 hours</p>
        </div>
      </div>

      <button className="start-irrigation-btn">🚜 Start Irrigation</button>
    </section>
  );
};

export default Irrigation;

