import React from 'react';

const Nav = () => [
  <section id="navbar" className="container d-none d-sm-block"> {/* only visible on large screen */}
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Overview
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Prices
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Reviews
        </a>
      </li>
    </ul>
  </section>,
  <div className="container navbar-mobile px-0 d-block d-sm-none"> {/* hidden on large screen */}
    <div className="row navbar-mobile_row my-0">
      <div className="col-4 py-3 px-0">
        <i className="far fa-calendar" />&nbsp;PRICES
      </div>
      <div className="col-4 py-3 px-0">
        <i className="fas fa-map-marker-alt" />&nbsp;MAP
      </div>
      <div className="col-4 py-3 px-0">
        <i className="fas fa-comment" />&nbsp;REVIEWS
      </div>
    </div>
  </div>
];

export default Nav;
