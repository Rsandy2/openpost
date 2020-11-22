import React from "react";
import { Link } from "react-router-dom";
import "../../css/index.css";
import "../../css/HomeNav.css";

export default function HomeNavbar() {
  return (
    <div className="main-container">
      <div className="logo">
        <Link to="/">
          <h1>
            <span>OPENWIST</span>
          </h1>
        </Link>
      </div>
      <div className="nav-container">
        <ul className="nav-ul">
          <li className="nav-item">
            <Link to="/quotes">
              <h2 className="nav-item-title">
                <span>Quotes</span>
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create">
              <h2 className="nav-item-title">
                <span>Create a quote</span>
              </h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
