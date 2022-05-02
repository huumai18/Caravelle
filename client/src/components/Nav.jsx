import { Link } from "react-scroll";
import React, { useState } from "react";
export const Nav = () => {
  return (
    <div className="container">
      <div className="links-nav">
        <Link
          to="home"
          className="link"
          smooth={true}
          offset={50}
          duration={700}
          activeClassName="active"
        >
          Home
        </Link>
        <Link
          activeClassName="active"
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
        >
          About
        </Link>
        <Link
          activeClassName="active"
          className="link"
          to="reservation"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
        >
          Reservation
        </Link>
        <Link
          className="link"
          activeClassName="active"
          to="menu"
          spy={true}
          smooth={true}
          offset={50}
          duration={900}
        >
          Menu
        </Link>
        <Link
          className="link"
          activeClassName="active"
          to="location"
          spy={true}
          smooth={true}
          offset={50}
          duration={1200}
        >
          Location
        </Link>
      </div>
    </div>
  );
};
