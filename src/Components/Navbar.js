import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; // Assuming you separate styles

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div>
      <div className="NavBar">
      <div className="Logo">Jumman</div>
      <div className="TabLinks">
        <Link to="/" className="TabLink">Home</Link>
        <Link to="/" className="TabLink">Projects</Link>
        <Link to="/Contact" className="TabLink">Contact</Link>
        <Link to="/About" className="TabLink">About Me</Link>
      </div>
      <div className="TabBar" onClick={toggleMenu}>
        <div className={`topBar ${menuOpen ? 'topBarActive' : ''}`}></div>
        <div className={`midBar ${menuOpen ? 'midBarHidden' : ''}`} ></div>
        <div className={`lowerBar ${menuOpen ? 'lowerBarActive' : ''}`}></div>
      </div>    
    </div>
    <div className="TabSmdLinks" style={menuOpen ? {height:'12rem',borderRadius:'0rem 0rem 2rem 2rem',paddingBottom:'1rem'}:{height:'0rem',paddingBottom:'0'}}>
        <Link to="/" className="TabSmdLink" style={menuOpen ? {height:'2rem',opacity:'100'}:{height:'0rem',opacity:'0',visibility:'hidden'}}>Home</Link>
        <Link to="/" className="TabSmdLink" style={menuOpen ? {height:'2rem',opacity:'100'}:{height:'0rem',opacity:'0',visibility:'hidden'}}>Projects</Link>
        <Link to="/Contact" className="TabSmdLink" style={menuOpen ? {height:'2rem',opacity:'100'}:{height:'0rem',opacity:'0',visibility:'hidden'}}>Contact</Link>
        <Link to="/About" className="TabSmdLink"  style={menuOpen ? {height:'2rem',opacity:'100'}:{height:'0rem',opacity:'0',visibility:'hidden'}}>About Me</Link>
      </div>
    </div>
  );
}


