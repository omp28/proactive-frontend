import { useState, useEffect, useRef } from "react";
import "./Hero.scss";
import SearchBar from "../Searchbar/Searchbar";

export default function Hero() {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

  useEffect(() => {
    const column1 = column1Ref.current;
    const column2 = column2Ref.current;

    if (!column1 || !column2) return;

    const handleColumn1Animation = () => {
      const images = column1.children;
      Array.from(images).forEach((img) => {
        if (img.offsetTop + img.clientHeight < 0) {
          column1.appendChild(img);
        }
      });
    };

    const handleColumn2Animation = () => {
      const images = column2.children;
      Array.from(images).forEach((img) => {
        if (img.offsetTop > column2.clientHeight) {
          column2.insertBefore(img, column2.firstChild);
        }
      });
    };

    const animate = () => {
      handleColumn1Animation();
      handleColumn2Animation();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="container">
      <div className="images-container">
        <div className="column" ref={column1Ref}>
          <img src="/assets/tower11.png" alt="Cooking healthy food" />
          <img src="/assets/tower12.png" alt="Person doing yoga" />
          <img src="/assets/tower13.png" alt="Beach activity" />
          <img src="/assets/tower14.png" alt="Healthy nutrition" />
        </div>
        <div className="column" ref={column2Ref}>
          <img src="/assets/tower22.png" alt="Wellness session" />
          <img src="/assets/tower23.png" alt="Therapy session" />
          <img src="/assets/tower24.png" alt="Meditation practice" />
        </div>
      </div>

      <SearchBar />
      <div className="content-section">
        <h1 className="title">
          Book an appointment with
          <br />
          <span>lifestyle medicine</span> experts
        </h1>
        <p className="subtitle">
          Optimize your lifestyle and reverse chronic diseases.
        </p>
      </div>

      <div className="decorative-strip"></div>
    </div>
  );
}
