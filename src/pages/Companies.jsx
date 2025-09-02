import React, { useState } from "react";
import NavBar from "../components/Layout/navBar/navBar";
import SubHeader from "../components/Layout/SubHeader/SubHeader";
import Footer from "../components/Layout/Footer/Footer";
import "../styles/Companies.css";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  // Example company data
  const [companies] = useState([
    {
      id: 1,
      name: "TechCorp",
      location: "Kathmandu",
      industry: "Software",
      openings: 12,
    },
    {
      id: 2,
      name: "DesignHub",
      location: "Pokhara",
      industry: "Design",
      openings: 5,
    },
    {
      id: 3,
      name: "DataSolve",
      location: "Lalitpur",
      industry: "Data Science",
      openings: 8,
    },
    {
      id: 4,
      name: "Appify",
      location: "Kathmandu",
      industry: "Mobile Apps",
      openings: 3,
    },
    {
      id: 5,
      name: "WebWorks",
      location: "Bhaktapur",
      industry: "Web Development",
      openings: 7,
    },
    {
      id: 6,
      name: "NeuroTech",
      location: "Tokyo",
      industry: "AI",
      openings: 4,
    },
  ]);

  const filteredCompanies = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      c.location.toLowerCase().includes(location.toLowerCase()) &&
      (industry
        ? c.industry.toLowerCase().includes(industry.toLowerCase())
        : true)
  );

  return (
    <>
      <Header />
      <div className="companies-page">
        <h1 className="companies-title">Explore Companies</h1>

        {/* Filters */}
        <div className="company-filters">
          <input
            type="text"
            placeholder="Search company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Industry..."
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>

        {/* Company Listings */}
        <div className="company-listings">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((c) => (
              <div key={c.id} className="company-card">
                <div className="logo-wrapper">
                  <img
                    src={`https://i.pravatar.cc/150?img=${c.id + 20}`}
                    alt={c.name}
                    className="company-logo"
                  />
                </div>
                <h2>{c.name}</h2>
                <p className="industry">{c.industry}</p>
                <p className="location">{c.location}</p>
                <p className="openings">{c.openings} Open Positions</p>
                <button className="view-company-btn">View Company</button>
              </div>
            ))
          ) : (
            <p className="no-results">
              No companies found. Try adjusting your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Companies;
