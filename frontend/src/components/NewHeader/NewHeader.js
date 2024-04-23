
import React from 'react';
import './NewHeader.css'; 

const NewHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="new-nav-item new-nav-link" href="/login">Login</a>
          <a className="new-nav-item new-nav-link" href="/register">Register</a>       
        </div>
      </div>
    </nav>
  );
}

export default NewHeader;
