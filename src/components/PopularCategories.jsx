// src/components/PopularCategories.jsx
import React from "react";

const categories = [
  { name: "Web Development", icon: "/assets/web-development.svg", desc: "Build and maintain websites and web apps using modern technologies." },
  { name: "Mobile App Development", icon: "/assets/mobile-app-developing.svg", desc: "Create engaging mobile applications for iOS and Android platforms." },
  { name: "Artificial Intelligence", icon: "/assets/AI.svg", desc: "Develop AI models and solutions to solve complex problems." },
  { name: "Machine Learning", icon: "/assets/machine-learning.svg", desc: "Build predictive models and data-driven algorithms." },
  { name: "Data Science", icon: "/assets/data-science.svg", desc: "Analyze and interpret complex data to help make decisions." },
  { name: "Cybersecurity", icon: "/assets/cybersecurity.svg", desc: "Protect systems and networks from digital threats and attacks." },
  { name: "Cloud Computing", icon: "/assets/cloud-computing.svg", desc: "Manage cloud infrastructure and deploy scalable applications." },
  { name: "Graphic Design", icon: "/assets/layers.svg", desc: "Create visual content for digital and print media." },
];

const PopularCategories = () => {
  return (
    <section className="popular-categories">
      <div className="container">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img src={cat.icon} alt={`${cat.name} Icon`} />
                </span>
                <div className="category-text">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
