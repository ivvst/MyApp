// Unauthorized.jsx
import React from 'react';
import "./unautho.css"

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h2>Access Denied</h2>
      <p>You don't have permission to view this page.</p>
      <img src='https://www.wbolt.com/wp-content/uploads/2021/08/401-error-thumb.jpg' alt="Access Denied" />
    </div>
  );
};

export default Unauthorized;
