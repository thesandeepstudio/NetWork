// src/components/Stats.jsx
import React, { useEffect } from "react";

const Stats = ({ stats }) => {
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

  useEffect(() => {
    if (stats) {
      animateValue("jobs-count", 0, stats.jobs || 0, 1000);
      animateValue("companies-count", 0, stats.companies || 0, 1000);
      animateValue("candidates-count", 0, stats.candidates || 0, 1000);
      animateValue("newjobs-count", 0, stats.newJobs || 0, 1000);
    }
  }, [stats]);

  return (
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
  );
};

export default Stats;
