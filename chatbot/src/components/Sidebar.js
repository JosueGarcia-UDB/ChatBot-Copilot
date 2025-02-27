'use client';

import React from "react";
import { FaBook,  FaUserGraduate, FaLifeRing, FaBriefcase, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Temas</h3>
      <ul className="sidebar-list">
        <li className="sidebar-item active">
          <FaBook className="sidebar-icon" /> 
          <span>Información Académica</span>
        </li>
        <li className="sidebar-item">
          <FaUserGraduate className="sidebar-icon" /> 
          <span>Servicios del Campus</span>
        </li>
        <li className="sidebar-item">
          <FaLifeRing className="sidebar-icon" /> 
          <span>Apoyo Estudiantil</span>
        </li>
        <li className="sidebar-item">
          <FaBriefcase className="sidebar-icon" /> 
          <span>Desarrollo Profesional</span>
        </li>
        <li className="sidebar-item">
          <FaUsers className="sidebar-icon" /> 
          <span>Vida Estudiantil</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;