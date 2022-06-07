import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">VİDEA</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Siyahı</Link>
            </li>

            <li>
              <Link to="/add" className="btn">
                Əlavə et +
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
