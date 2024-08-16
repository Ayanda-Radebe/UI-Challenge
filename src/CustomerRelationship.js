import React from 'react';
import './customerRelationship.css';
// Uncomment this if you want to use the image
// import crm from './crm.png';

const CustomerRelationship = () => {
  return (
    <section className="customer-relationship">
  <div className="container">
    <div className="text-card">
      <div className="text-container">
      <button className="highlight-button"><span>New</span> How Monobank uses Bridge to power their growth </button>
      <h1>Build customer <br></br>relationship in<br></br> a flexible way</h1>
        <p>Powerful, flexible and data-driven, Bridge makes <br></br> it easy to build the exact CRM your business needs.</p>
      </div>
      <button className="cta-button">Open Bridge for free</button>
    </div>
    <div className="image-container">
      <div className="image-card">
        <img src="crm.png" alt="Company Logo" />
      </div>
    </div>
  </div>
</section>
  );
};

export default CustomerRelationship;