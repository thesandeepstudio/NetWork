import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UnderConstruction from "./pages/UnderConstruction"; // ✅ Import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/under_construction" element={<UnderConstruction />} /> {/* ✅ Add route */}
      </Routes>
    </Router>
  );
};

export default App;
