import React from "react";

const AfterLoginHeader = () => {
  return (
    <div className="container" style={{ width: "100vw" }}>
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

        <ul className="nav col-12 col-md-auto mb-0 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link px-2 link-dark">
              About us
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link px-2 link-dark">
              Conatct
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default AfterLoginHeader;
