import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="container" style={{width:"3020px"}}>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom w-100">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-md-0 text-dark text-decoration-none"
        >
          <img
            className="bi me-2 object-fit-cover"
            width="270"
            height="100"
            role="img"
            aria-label="Bootstrap"
            src="/img/CareerConnect.png"
          />
        
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="/features" className="nav-link px-2 link-dark">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            <a href="/login" style={{textDecoration: "none"}}>Login</a>
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
