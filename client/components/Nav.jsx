import React from 'react';

const Nav = () => (
  <section id="navbar" className="container">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <u>Overview</u>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Prices</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Reviews</a>
      </li>
    </ul>
  </section>
);

export default Nav;
