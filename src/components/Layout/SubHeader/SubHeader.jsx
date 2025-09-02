import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SubHeader.css";

const SubHeader = ({ category, setCategory }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  return (
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

        <input
          type="text"
          placeholder="Search jobs..."
          className="search-box"
        />

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
                className="profile-avatar"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
