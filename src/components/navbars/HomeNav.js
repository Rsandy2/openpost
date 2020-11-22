import React from "react";
import { Link } from "react-router-dom";
import "../../css/index.css";
import "../../css/nav.css";

export default function HomeNavbar() {
  return (
    <div className="main-container">
      <div className="logo">
        <Link to="/" className="home-link">
          OPENWIST
        </Link>
      </div>
      <nav className="nav-container">
        <ul className="nav-ul">
          <li className="nav-item">
            <Link to="/quotes" className="nav-link">
              <h2 className="nav-item-title">
                <span>Quotes</span>
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              <h2 className="nav-item-title">
                <span>Create a quote</span>
              </h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
