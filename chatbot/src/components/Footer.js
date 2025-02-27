'use client';

import React from "react";
import { FaBolt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <button className="power-button">
          <FaBolt />
        </button>
        <p className="copyright">
           2025 Universidad Don Bosco - Chatbot de Soporte 
        </p>
        <div></div> 
      </div>
    </footer>
  );
};

export default Footer;