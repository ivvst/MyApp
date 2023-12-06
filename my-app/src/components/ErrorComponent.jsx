// ErrorComponent.jsx
import React from 'react';

const ErrorComponent = () => {
  const throwError = () => {
    throw new Error('Opss... error for testing error boundary');
  };

  return (
    <div>
      <h2>Error Component</h2>
      <button onClick={throwError}>Trigger Error</button>
    </div>
  );
};

export default ErrorComponent;
