import React from "react";
import "./header.css";

const Header = ({ logo }) => {
  return (
    <div>
      <div className="header-container">
        <img src={logo} alt="" />

        <label class="input">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <button className="sort-btn">Blog</button>
      </div>
    </div>
  );
};

export default Header;
