import React, { useEffect, useState } from "react";
import "../styles/ProfilePage.css";


const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  if (!currentUser) {
    return (
      <div className="profile-page-container">
        <p className="login-message">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-page-container">
      <h1>Welcome, {currentUser.name}</h1>
      <p>This is your profile page.</p>
    </div>
  );
};

export default ProfilePage;
