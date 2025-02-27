'use client';

import React from "react";

const Footer = () => {

  let date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
           {date} Universidad Don Bosco - Chatbot de Soporte 
        </p>
      </div>
    </footer>
  );
};

export default Footer;