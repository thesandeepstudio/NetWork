import React, { useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import "../styles/FindJob.css";

const FindJob = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // 12 unique jobs
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeWorks",
      location: "New York, USA",
      type: "Part-time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "CreativeLabs",
      location: "London, UK",
      type: "Contract",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataSolve",
      location: "San Francisco, USA",
      type: "Full-time",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudNet",
      location: "Berlin, Germany",
      type: "Full-time",
    },
    {
      id: 6,
      title: "Mobile App Developer",
      company: "Appify",
      location: "Toronto, Canada",
      type: "Part-time",
    },
    {
      id: 7,
      title: "Product Manager",
      company: "InnoTech",
      location: "Remote",
      type: "Contract",
    },
    {
      id: 8,
      title: "QA Engineer",
      company: "TestLabs",
      location: "Austin, USA",
      type: "Full-time",
    },
    {
      id: 9,
      title: "Graphic Designer",
      company: "DesignHub",
      location: "Paris, France",
      type: "Part-time",
    },
    {
      id: 10,
      title: "Full Stack Developer",
      company: "WebWorks",
      location: "Amsterdam, Netherlands",
      type: "Full-time",
    },
    {
      id: 11,
      title: "AI Engineer",
      company: "NeuroTech",
      location: "Tokyo, Japan",
      type: "Contract",
    },
    {
      id: 12,
      title: "Cybersecurity Analyst",
      company: "SecureIT",
      location: "London, UK",
      type: "Full-time",
    },
    {
      id: 13,
      title: "Cloud Architect",
      company: "SkyNet",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 14,
      title: "Marketing Specialist",
      company: "Brandify",
      location: "New York, USA",
      type: "Part-time",
    },
    {
      id: 15,
      title: "Technical Writer",
      company: "DocuWorks",
      location: "London, UK",
      type: "Contract",
    },
  ]);

  // Filter jobs based on search, location, and type
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (jobType ? job.type === jobType : true)
  );

  return (
    <>
      <Header />
      <div className="find-job">
        <h1 className="find-job-title">Find Your Next Job</h1>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <h2>{job.title}</h2>
                <p className="company">{job.company}</p>
                <p>{job.location}</p>

                {/* Type + Apply button wrapper */}
                <div className="job-footer">
                  <span className="type">{job.type}</span>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">
              No jobs found. Try adjusting your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindJob;
