import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ category, setCategory }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);


  return (
    <header>
      <div className="container">
        <div className="logo">NetWork</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/under_construction">Find Jobs</Link></li>
            <li><Link to="/under_construction">Employers</Link></li>
            <li><Link to="/under_construction">Candidates</Link></li>
            <li><Link to="/under_construction">Companies</Link></li>
            <li><Link to="/under_construction">Customer Support</Link></li>
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
            <option value="" disabled>Select a category</option>
            <option value="web_development">Web Development</option>
            <option value="mobile_app_development">Mobile App Development</option>
            <option value="artificial_intelligence">Artificial Intelligence (AI)</option>
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

          <input type="text" placeholder="Search jobs..." className="search-box" />

          <div className="sub-buttons">
            {!currentUser ? (
              <>
                <Link to="/sign_in" className="signin-btn">Sign In</Link>
                <Link to="/sign_up" className="post-job-btn">Sign Up</Link>
              </>
            ) : (
              <Link to="/profile">
                <img
                  src="/assets/Hacker.png"
                  alt="Profile Avatar"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
