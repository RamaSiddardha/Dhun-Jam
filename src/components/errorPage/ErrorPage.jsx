// ErrorPage.js
import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-header">
          <h1>Oops! Something went wrong</h1>
        </div>
        <div className="error-body">
          <p>{message}</p>
        </div>
        <div className="error-footer">
          <button onClick={() => navigate("/")}>Reload Page</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
