import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 200);
  });
  return (
    <div>
      <header className="header">
        <div className="container flex align-items-center">
          <div className="logo">
            <a href="/">
            <img src="assets/logo.png" />
            </a>
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="icon">
                <i class="fa-solid fa-magnifying-glass headerIcon"></i>
                <i class="fa-solid fa-briefcase headerIcon"></i>
                <i class="fas fa-th-large headerIcon"></i>
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}
