import React from "react";
import { Link } from "react-router-dom";
import "../../css/index.css";
import "../../css/HomeNav.css";

export default function HomeNavbar() {
  return (
    <header class="main-container flex-center">
      <nav className="nav-container flex-nav">
        <li className="navQuotes">
          <Link to="/quotes">
            <h2 className="nav-item-title">
              <span>Quotes</span>
            </h2>
          </Link>
        </li>

        <div className="logo">
          <Link to="/">
            <h1>
              <span>OPENWIST</span>
            </h1>
          </Link>
        </div>

        <li className="nav-item">
          <Link to="/create">
            <h2 className="buttonQuote buttonQuoteColor">
              <span className="quoteText">Create a quote</span>
            </h2>
          </Link>
        </li>
      </nav>
    </header>
  );
}
