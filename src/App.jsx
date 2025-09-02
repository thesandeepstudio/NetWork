import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout components
import NavBar from "./components/Layout/navBar/navBar";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import Footer from "./components/Layout/Footer/Footer";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import FindJob from "./pages/FindJob";
import Candidates from "./pages/Candidates";
import Companies from "./pages/Companies";
import CustomerSupport from "./pages/CustomerSupport";
import UnderConstruction from "./pages/UnderConstruction";
import Faq from "./pages/Faq";

const App = () => {
  const [category, setCategory] = React.useState("");

  return (
    <Router>
      {/* Layout components (appear once) */}
      <NavBar />
      <SubHeader category={category} setCategory={setCategory} />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/findJob" element={<FindJob />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/customerSupport" element={<CustomerSupport />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/under_construction" element={<UnderConstruction />} />
      </Routes>

      {/* Footer appears once */}
      <Footer />
    </Router>
  );
};

export default App;
