import React from "react";
import "./Searchbar.scss";

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="search-field">
          <div className="search-icon">
            <img src="/assets/search-icon.png" alt="Search Icon" />
          </div>
          <input
            type="text"
            placeholder="Condition, procedure, speciality..."
            className="search-input"
          />
        </div>

        <div className="search-field">
          <div className="search-icon">
            <img src="/assets/location-icon.png" alt="Location Icon" />
          </div>
          <input
            type="text"
            placeholder="City, state, or zipcode"
            className="search-input"
          />
        </div>

        <div className="search-field">
          <div className="search-icon">
            <img src="/assets/insurance-icon.png" alt="Insurance Icon" />
          </div>
          <input
            type="text"
            placeholder="Insurance carrier"
            className="search-input"
          />
        </div>

        <button className="search-button">Find now</button>
      </div>
    </div>
  );
}
