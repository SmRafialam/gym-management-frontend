import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./app/components/login";
import Register from "./app/components/register";
import AdminDashboard from "./app/components/adminDashboard";
import TrainerDashboard from "./app/components/trainerDashboard";
import Home from "./app/components/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/trainer" element={<TrainerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
