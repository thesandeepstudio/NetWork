// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  const [category, setCategory] = useState("");
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
      <Header category={category} setCategory={setCategory} />
      <Hero />
      <Stats stats={stats} />
      <PopularCategories />
    </div>
  );
};

export default Home;
