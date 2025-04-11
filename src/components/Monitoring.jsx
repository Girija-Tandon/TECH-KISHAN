import React from "react";
import "../styles/monitoring.css";

const Monitoring = () => {
  return (
    <section className="monitoring">
      <h2>📡 Farm Monitoring</h2>
      <p>Track real-time environmental conditions and optimize farming efficiency.</p>

      <div className="monitoring-data">
        <div className="data-item">
          <h3>🌡 Temperature</h3>
          <p>26°C</p>
        </div>
        <div className="data-item">
          <h3>💧 Humidity</h3>
          <p>65%</p>
        </div>
        <div className="data-item">
          <h3>☀️ Light Intensity</h3>
          <p>78%</p>
        </div>
        <div className="data-item">
          <h3>🌱 Soil Moisture</h3>
          <p>40%</p>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;

