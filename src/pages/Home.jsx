// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const Home = () => {
  const [category, setCategory] = useState("");

  // Count-up animation for stats
  const animateValue = (id, start, end, duration) => {
    const element = document.getElementById(id);
    if (!element) return;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const loadStats = async () => {
    try {
      const response = await fetch("/stats");
      const stats = await response.json();

      animateValue("jobs-count", 0, stats.jobs || 0, 1000);
      animateValue("companies-count", 0, stats.companies || 0, 1000);
      animateValue("candidates-count", 0, stats.candidates || 0, 1000);
      animateValue("newjobs-count", 0, stats.newJobs || 0, 1000);
    } catch (err) {
      console.error("Failed to load stats", err);
    }
  };

  useEffect(() => {
    loadStats();
    const interval = setInterval(loadStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header */}
      <header>
        <div className="container">
          <div className="logo">NetWork</div>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/under_construction">Find Jobs</Link>
              </li>
              <li>
                <Link to="/under_construction">Employers</Link>
              </li>
              <li>
                <Link to="/under_construction">Candidates</Link>
              </li>
              <li>
                <Link to="/under_construction">Companies</Link>
              </li>
              <li>
                <Link to="/under_construction">Customer Support</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sub-header">
          <div className="sub-container">
            <select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="web_development">Web Development</option>
              <option value="mobile_app_development">
                Mobile App Development
              </option>
              <option value="artificial_intelligence">
                Artificial Intelligence (AI)
              </option>
              <option value="machine_learning">Machine Learning</option>
              <option value="data_science">Data Science</option>
              <option value="cyber_security">Cybersecurity</option>
              <option value="cloud_computing">Cloud Computing</option>
              <option value="game_development">Game Development</option>
              <option value="graphic_design">Graphic Design</option>
              <option value="ui_ux_design">UI/UX Design</option>
              <option value="video_editing">Video Editing</option>
              <option value="animation">Animation</option>
              <option value="digital_art">Digital Art</option>
            </select>

            <input
              type="text"
              placeholder="Search jobs..."
              className="search-box"
            />

            <div className="sub-buttons">
              <Link to="/sign_in" className="signin-btn">
                Sign In
              </Link>
              <Link to="/sign_up" className="post-job-btn">
                Sign Up
              </Link>
              <Link
                to="/profile"
                className="profile-btn"
                id="profile-btn"
                style={{ display: "none" }}
              >
                My Profile
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Land the Perfect Job for Your Skills and Interests</h1>
            <p>
              Connect with exciting IT, creative, and multimedia projects, and
              bring your ideas to life with modern tools and innovative
              approaches.
            </p>
            <div className="hero-buttons">
              <Link
                to="/under_construction"
                className="hero-action-btn post-job-btn"
              >
                Post a Job
              </Link>
              <Link
                to="/under_construction"
                className="hero-action-btn apply-job-btn"
              >
                Apply a Job
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/visual-collaboration.svg"
              alt="Visual Collaboration Illustration"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-box">
            <h2 id="jobs-count">0</h2>
            <p>Live Jobs</p>
          </div>
          <div className="stat-box">
            <h2 id="companies-count">0</h2>
            <p>Companies</p>
          </div>
          <div className="stat-box">
            <h2 id="candidates-count">0</h2>
            <p>Candidates</p>
          </div>
          <div className="stat-box">
            <h2 id="newjobs-count">0</h2>
            <p>New Jobs</p>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="popular-categories">
        <div className="container">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img
                    src="/assets/web-development.svg"
                    alt="Web Development Icon"
                  />
                </span>
                <div className="category-text">
                  <h3>Web Development</h3>
                  <p>
                    Build and maintain websites and web apps using modern
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img
                    src="/assets/mobile-app-developing.svg"
                    alt="Mobile App Development Icon"
                  />
                </span>
                <div className="category-text">
                  <h3>Mobile App Development</h3>
                  <p>
                    Create engaging mobile applications for iOS and Android
                    platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img src="/assets/AI.svg" alt="AI Icon" />
                </span>
                <div className="category-text">
                  <h3>Artificial Intelligence</h3>
                  <p>
                    Develop AI models and solutions to solve complex problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img
                    src="/assets/machine-learning.svg"
                    alt="Machine Learning Icon"
                  />
                </span>
                <div className="category-text">
                  <h3>Machine Learning</h3>
                  <p>Build predictive models and data-driven algorithms.</p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img src="/assets/data-science.svg" alt="Data Science Icon" />
                </span>
                <div className="category-text">
                  <h3>Data Science</h3>
                  <p>
                    Analyze and interpret complex data to help make decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img
                    src="/assets/cybersecurity.svg"
                    alt="Cybersecurity Icon"
                  />
                </span>
                <div className="category-text">
                  <h3>Cybersecurity</h3>
                  <p>
                    Protect systems and networks from digital threats and
                    attacks.
                  </p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img
                    src="/assets/cloud-computing.svg"
                    alt="Cloud Computing Icon"
                  />
                </span>
                <div className="category-text">
                  <h3>Cloud Computing</h3>
                  <p>
                    Manage cloud infrastructure and deploy scalable
                    applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img src="/assets/layers.svg" alt="Graphic Design Icon" />
                </span>
                <div className="category-text">
                  <h3>Graphic Design</h3>
                  <p>Create visual content for digital and print media.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
