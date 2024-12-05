import React, { useState } from "react";
import "./Lifestyle.scss";

const pillars = [
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    image: "/assets/nutrition.png",
    icon: "🍽️",
    metric: "12/80",
    unit: "min/kg",
  },
  {
    id: "physical-activity",
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    image: "/assets/activity.png",
    icon: "❤️",
    metric: "32",
    unit: "minutes",
  },
  {
    id: "restorative-sleep",
    title: "Restorative sleep",
    description:
      "Consistent, quality sleep is essential for optimal brain function and physical health.",
    image: "/assets/sleep.png",
    icon: "🌙",
    metric: "8",
    unit: "hours",
  },
  {
    id: "stress-management",
    title: "Stress management",
    description:
      "Effective stress management techniques can improve overall health and well-being.",
    image: "/assets/stress.png",
    icon: "🧘",
    metric: "15",
    unit: "minutes",
  },
  {
    id: "social-connection",
    title: "Social connection",
    description:
      "Strong social connections contribute to better mental and physical health.",
    image: "/assets/social.png",
    icon: "👥",
    metric: "3",
    unit: "connections",
  },
  {
    id: "substance-abuse",
    title: "Substance abuse",
    description:
      "Avoiding substance abuse is crucial for maintaining good health and preventing various diseases.",
    image: "/assets/abuse.png",
    icon: "🚫",
    metric: "0",
    unit: "substances",
  },
];

const Lifestyle = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % pillars.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  return (
    <div className="lifestyle-medicine">
      <h2 className="title">Lifestyle as medicine: The six pillars</h2>
      <div className="carousel">
        <button onClick={handlePrev} className="nav-button">
          &lt;
        </button>
        <div className="cards">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`card ${index === activeIndex ? "active" : ""} ${
                index < activeIndex ? "left" : "right"
              }`}
            >
              <div className="card-image-container">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="card-image"
                />
                <div className="card-metric">
                  <span className="icon">{pillar.icon}</span>
                  <span className="metric">
                    {pillar.metric} {pillar.unit}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{pillar.title}</h3>
                <p className="card-description">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="nav-button">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Lifestyle;
