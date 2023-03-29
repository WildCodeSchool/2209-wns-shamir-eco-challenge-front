import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <Link to="/" className="navigation-link">
        Home
      </Link>
      <Link to="/Challenges" className="navigation-link">
        Challenges
      </Link>
      <Link to="/CreateChallenge" className="navigation-link">
        Create Challenge
      </Link>
      <Link to="/Profile" className="navigation-link">
        Profile
      </Link>
    </div>
  );
}
