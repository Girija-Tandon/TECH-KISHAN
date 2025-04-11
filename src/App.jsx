import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import Navbar instead of Header
import Dashboard from "./components/Dashboard";
import Monitoring from "./components/Monitoring";
import Irrigation from "./components/Irrigation";
import Marketplace from "./components/Marketplace";
import PestControl from "./components/PestControl";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />  {/* Use Navbar here instead of Header */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/irrigation" element={<Irrigation />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pestcontrol" element={<PestControl />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
