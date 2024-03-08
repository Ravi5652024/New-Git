import React from 'react';
import './CSS/Error.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button className="error-button" onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
}

export default ErrorPage;
