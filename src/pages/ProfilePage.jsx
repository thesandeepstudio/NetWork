import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    headline: "",
    summary: "",
    experience: "",
    skills: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        headline: user.headline || "",
        summary: user.summary || "",
        experience: user.experience || "",
        skills: user.skills || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = { ...currentUser, ...formData };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
    alert("Profile updated!");
  };

  const handleCancel = () => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        location: currentUser.location || "",
        headline: currentUser.headline || "",
        summary: currentUser.summary || "",
        experience: currentUser.experience || "",
        skills: currentUser.skills || "",
      });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/sign_in");
  };

  if (!currentUser) {
    return (
      <div className="profile-page-container">
        <p className="login-message">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-page-container flex">
      {/* Sidebar */}
      <ProfileSidebar user={currentUser} onSignOut={handleSignOut} />

      {/* Profile Form */}
      <div className="profile-content">
        <div className="profile-card">
          <img
            src="/assets/Hacker.png"
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <h2>{currentUser.name}</h2>

          <form className="profile-form" onSubmit={handleSave}>
            <label>
              Full Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </label>

            <label>
              Headline:
              <input
                type="text"
                name="headline"
                value={formData.headline}
                onChange={handleChange}
              />
            </label>

            <label>
              Summary:
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </label>

            <label>
              Experience:
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </label>

            <label>
              Skills:
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., JavaScript, React, Node.js"
              />
            </label>

            {/* Buttons */}
            <div className="profile-form-buttons">
              <button type="submit" className="save-btn">
                Save Changes
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
