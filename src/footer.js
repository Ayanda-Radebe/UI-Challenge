import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">We helped to improve such companies as</p>
      <div className="logo-container">
        <img src="hyperlink.png" alt="Hyperline" className="logo" />
        <img src="ai.png" alt="OpenAI" className="logo" />
        <img src="plain.png" alt="Plain" className="logo" />
        <img src="ondeck.png" alt="On Deck" className="logo" />
        <img src="pallet.png" alt="Pallet" className="logo" />
        <img src="beacons.png" alt="Beacons" className="logo" />
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;