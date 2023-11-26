import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="header__link">
          <h1 className="header-title">The Meal</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
