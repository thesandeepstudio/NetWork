import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/sign_in";
  };

  if (!currentUser) {
    return (
      <div className="profile-page-container">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-page-container">
      <ProfileSidebar user={currentUser} onSignOut={handleSignOut} />

      <div className="profile-content">
        <h1>Welcome, {currentUser.name}</h1>
        <p>This is your profile page content.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
