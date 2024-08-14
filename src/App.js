import React from 'react';
import './header.css';
import Footer from './footer';  // Import Footer if you need it here

const navItems = [
  { label: 'Use Cases', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Pricing', href: '#' },
];

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="bridgelogo.jpeg" alt="Company Logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="right-nav">
        <button className="login-button">Log in </button>
        <button className="getstarted-button">Get Started </button>        
        </div>
      </header>
      <Footer /> {/* Include Footer here if needed */}
    </>
  );
};

export default Header;