import React from 'react';
import './customerRelationship.css';
// Uncomment this if you want to use the image
// import crm from './crm.png';

const CustomerRelationship = () => {
  return (
    <section className="customer-relationship">
      <div className="text-content">
        <h1>Build customer relationship in a flexible way</h1>
        <p>
          Powerful, flexible and data-driven, Bridge makes it easy to build the exact CRM your business needs.
        </p>
        <button className="cta-button">Open Bridge for free</button>
      </div>
      <div className="image-content">
        {/* Uncomment and use this image if you have it in your project */}
        {/* <img src={crm} alt="CRM Workflow" /> */}
      </div>
    </section>
  );
};

export default CustomerRelationship;
