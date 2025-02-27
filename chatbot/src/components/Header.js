'use client';

import React, { useState } from "react";
import { FaRobot, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <FaRobot className="brand-icon" />
          <span className="brand-name">Chatbot UDB</span>
        </div>
        <nav className="nav">
          <button 
            className="toggle-menu" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
         
         
         
        </nav>
      </div>
    </header>
  );
};

export default Header;