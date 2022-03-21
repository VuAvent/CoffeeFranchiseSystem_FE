import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      </div>
    </Router>
  );
}
export default App;
