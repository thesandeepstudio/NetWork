import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/underConstruction.css";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="under-container">
      <div className="under-content">
        <h1>🚧 Under Construction 🚧</h1>
        <p>We're working hard to bring you this page. Stay tuned!</p>
        <button className="go-back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
