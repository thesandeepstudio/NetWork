// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import "../styles/style.css";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  const [category, setCategory] = useState(""); // selected category
  const [stats, setStats] = useState(null);

  const loadStats = async () => {
    try {
      const response = await fetch("/stats");
      const data = await response.json();
      setStats(data);
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
      <Hero />
      <Stats stats={stats} />
      <PopularCategories category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
