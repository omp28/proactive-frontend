import React, { useState, useRef, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const cardElements = carouselRef.current.getElementsByClassName("card");
      if (cardElements.length > index) {
        const cardElement = cardElements[index];
        const containerWidth = carouselRef.current.offsetWidth;
        const cardWidth = cardElement.offsetWidth;
        const scrollPosition =
          cardElement.offsetLeft - (containerWidth - cardWidth) / 2;

        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % pillars.length;
    setActiveIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + pillars.length) % pillars.length;
    setActiveIndex(prevIndex);
    scrollToCard(prevIndex);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div className="lifestyle-medicine">
      <h2 className="title">Lifestyle as medicine: The six pillars</h2>
      {!isMobile && (
        <div className="tabs-container">
          <div className="tabs">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                className={`tab ${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToCard(index);
                }}
              >
                {pillar.title}
              </button>
            ))}
          </div>
          <div className="desktop-navigation">
            <button onClick={handlePrev} className="nav-button right">
              <img src="/assets/leftArrow.png" alt="Previous" />
            </button>
            <button onClick={handleNext} className="nav-button left">
              <img src="/assets/leftArrow.png" alt="Next" />
            </button>
          </div>
        </div>
      )}
      <div className="carousel-container">
        <div
          className="carousel"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`card ${index === activeIndex ? "active" : ""}`}
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
      </div>
    </div>
  );
};

export default Lifestyle;
