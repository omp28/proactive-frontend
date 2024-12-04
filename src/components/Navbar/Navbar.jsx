import React, { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          <img
            src="/assets/logo.png"
            alt="ProVital"
            className="navbar__logo-image"
          />
          <span className="navbar__logo-text">ProVital</span>
        </a>

        <button className="navbar__mobile-toggle" onClick={toggleMobileMenu}>
          <div className="navbar__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="navbar__desktop-menu">
          <a href="/list-practice" className="navbar__link">
            List your practice
          </a>
          <a href="/employers" className="navbar__link">
            For Employers
          </a>
          <a href="/courses" className="navbar__link">
            Courses
          </a>
          <a href="/books" className="navbar__link">
            Books
          </a>
          <a href="/speakers" className="navbar__link">
            Speakers
          </a>
          <a href="/doctors" className="navbar__link">
            Doctors
          </a>

          <div className="navbar__auth">
            <button
              className="navbar__dropdown-toggle"
              onClick={toggleDropdown}
            >
              Login / Signup
              <span
                className={`navbar__dropdown-arrow ${
                  isDropdownOpen ? "open" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isDropdownOpen && (
              <div className="navbar__dropdown">
                <div className="navbar__dropdown-section">
                  <span className="navbar__dropdown-label">Doctor</span>
                  <div className="navbar__dropdown-links">
                    <a href="/doctor/login">Login</a>
                    <a href="/doctor/signup">Sign up</a>
                  </div>
                </div>
                <div className="navbar__dropdown-section">
                  <span className="navbar__dropdown-label">Patients</span>
                  <div className="navbar__dropdown-links">
                    <a href="/patient/login">Login</a>
                    <a href="/patient/signup">Sign up</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="navbar__mobile-menu">
            <div className="navbar__mobile-header">
              <a href="/" className="navbar__logo">
                <img
                  src="/placeholder.svg"
                  alt="ProVital"
                  className="navbar__logo-image"
                />
                <span className="navbar__logo-text">ProVital</span>
              </a>
              <button
                className="navbar__close-button"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="navbar__mobile-auth">
              <div className="navbar__mobile-auth-section">
                <span className="navbar__mobile-auth-label">Doctor</span>
                <div className="navbar__mobile-auth-links">
                  <a href="/doctor/login">Login</a>
                  <a href="/doctor/signup">Sign up</a>
                </div>
              </div>
              <div className="navbar__mobile-auth-section">
                <span className="navbar__mobile-auth-label">Patients</span>
                <div className="navbar__mobile-auth-links">
                  <a href="/patient/login">Login</a>
                  <a href="/patient/signup">Sign up</a>
                </div>
              </div>
            </div>

            <div className="navbar__mobile-links">
              <a href="/doctors" className="navbar__mobile-link">
                Doctors
                <span className="navbar__mobile-arrow">→</span>
              </a>
              <a href="/list-practice" className="navbar__mobile-link">
                List your practice
                <span className="navbar__mobile-arrow">→</span>
              </a>
              <a href="/employers" className="navbar__mobile-link">
                For Employers
                <span className="navbar__mobile-arrow">→</span>
              </a>
              <a href="/courses" className="navbar__mobile-link">
                Courses
                <span className="navbar__mobile-arrow">→</span>
              </a>
              <a href="/books" className="navbar__mobile-link">
                Books
                <span className="navbar__mobile-arrow">→</span>
              </a>
              <a href="/speakers" className="navbar__mobile-link">
                Speakers
                <span className="navbar__mobile-arrow">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
