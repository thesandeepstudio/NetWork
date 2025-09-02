import React, { useState } from "react";
import NavBar from "../components/Layout/navBar/navBar";
import SubHeader from "../components/Layout/SubHeader/SubHeader";
import Footer from "../components/Layout/Footer/Footer";
import "../styles/Candidates.css";

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  // Example candidate data
  const [candidates] = useState([
    {
      id: 1,
      name: "Sandeep Sharma",
      title: "Frontend Developer",
      skills: "React, JavaScript",
      location: "Kathmandu",
      experience: "2 years",
    },
    {
      id: 2,
      name: "Anita Rai",
      title: "UI/UX Designer",
      skills: "Figma, Adobe XD",
      location: "Pokhara",
      experience: "3 years",
    },
    {
      id: 3,
      name: "Rajesh Thapa",
      title: "Backend Engineer",
      skills: "Node.js, Express",
      location: "Lalitpur",
      experience: "4 years",
    },
    {
      id: 4,
      name: "Priya Koirala",
      title: "Data Scientist",
      skills: "Python, ML",
      location: "Kathmandu",
      experience: "5 years",
    },
    {
      id: 5,
      name: "Binod Gurung",
      title: "DevOps Engineer",
      skills: "AWS, Docker",
      location: "Bhaktapur",
      experience: "3 years",
    },
    {
      id: 6,
      name: "Hari Ram",
      title: "SQL Developer",
      skills: "DBMS",
      location: "Kathmandu",
      experience: "5 years",
    },
  ]);

  // Filter candidates based on search, location, experience
  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      c.location.toLowerCase().includes(location.toLowerCase()) &&
      (experience ? c.experience.includes(experience) : true)
  );

  return (
    <>
      <Header />
      <div className="candidates-page">
        <h1 className="candidates-title">Browse Candidates</h1>

        {/* Filters */}
        <div className="candidate-filters">
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">All Experience</option>
            <option value="1">1+ years</option>
            <option value="2">2+ years</option>
            <option value="3">3+ years</option>
            <option value="4">4+ years</option>
            <option value="5">5+ years</option>
          </select>
        </div>

        {/* Candidate Listings */}
        <div className="candidate-listings">
          {filteredCandidates.length > 0 ? (
            filteredCandidates.map((c) => (
              <div key={c.id} className="candidate-card">
                {/* Avatar */}
                <div className="avatar-wrapper">
                  <img
                    src={`https://i.pravatar.cc/150?img=${c.id}`} // example random avatar
                    alt={c.name}
                    className="avatar"
                  />
                </div>

                <h2>{c.name}</h2>
                <p className="title">{c.title}</p>
                <p className="skills">{c.skills}</p>
                <p className="location">{c.location}</p>
                <p className="experience">{c.experience} experience</p>
                <button className="view-profile-btn">View Profile</button>
              </div>
            ))
          ) : (
            <p className="no-results">
              No candidates found. Try adjusting your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Candidates;
