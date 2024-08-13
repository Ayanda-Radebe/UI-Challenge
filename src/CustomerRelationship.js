import React from 'react';
import './customerRelationship.css';
import crm  from './crm.png'

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
      <img src={process.env.PUBLIC_URL + '/crm.png'} alt="CRM Workflow" />
      </div>
    </section>
  );
};

export default CustomerRelationship;