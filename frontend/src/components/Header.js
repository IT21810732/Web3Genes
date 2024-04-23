import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <a className="navbar-brand" href="#">
        <img src="/images/W3G_LogoWhite.png" alt="W3G Logo" height="30" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link nav-white" href="/user-onboarding">User Onboarding</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-white" href="/user-list">User List</a>
          </li>
          <li className="nav-item">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
