import React from 'react';
import './header.css';

const navItems = [
  { label: 'Use Cases', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Pricing', href: '#' },
];

const Header = () => {
  return (
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
        <button>Logout</button>
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Header;

