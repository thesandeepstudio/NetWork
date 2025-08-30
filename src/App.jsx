import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import FindJob from "./pages/FindJob";
import Candidates from "./pages/Candidates";
import Companies from "./pages/Companies";
import CustomerSupport from "./pages/CustomerSupport";
import UnderConstruction from "./pages/UnderConstruction";
import Faq from "./pages/Faq";
import { ImOpt } from "react-icons/im";
import { Import } from "lucide-react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/FindJob" element={<FindJob />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/customersupport" element={<CustomerSupport />} />
        <Route path="/faq" element={<Faq />} />



        <Route
          path="/under_construction"
          element={<UnderConstruction />}
        />{" "}
        {/* ✅ Add route for profile */}
      </Routes>
    </Router>
  );
};

export default App;
