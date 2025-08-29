import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/ProfileSidebar.css";

const ProfileSidebar = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove current user from localStorage
    localStorage.removeItem("currentUser");
    // Redirect to Sign In page
    navigate("/sign_in");
  };

  return (
    <div className="profile-sidebar">
      {/* Logo */}
      <div className="sidebar-logo">NetWork</div>

      {/* Top Section: Avatar + Links */}
      <div className="sidebar-top">
        <div className="sidebar-user">
          <img
            src="/assets/Hacker.png"
            alt="User Avatar"
            className="sidebar-avatar"
          />
          <h2 className="sidebar-username">{user.name}</h2>
          <p className="sidebar-email">{user.email}</p>
        </div>

        <nav className="sidebar-nav">
          <Link to="/profile" className="sidebar-link">My Profile</Link>
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
          <Link to="/messages" className="sidebar-link">Messages</Link>
          <Link to="/saved_jobs" className="sidebar-link">Saved Jobs</Link>
          <Link to="/applications" className="sidebar-link">Applications</Link>
          <Link to="/settings" className="sidebar-link">Settings</Link>
          <Link to="/help" className="sidebar-link">Help / Support</Link>
          <Link to="/notifications" className="sidebar-link">Notifications</Link>
        </nav>
      </div>

      {/* Sign Out Button at Bottom */}
      <button className="sidebar-signout" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default ProfileSidebar;
