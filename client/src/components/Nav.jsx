import { Link } from "react-scroll";
import React from "react";
export const Nav = () => {
  return (
    <section className="nav">
      <div className="container">
        <Link
          to="home"
          activeClass="active"
          className="link"
          smooth={true}
          offset={-10}
          spy={true}
          duration={700}
        >
          Home
        </Link>
        <Link
          activeClassName="active"
          d
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={10}
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
          offset={0}
          duration={800}
        >
          Reservation
        </Link>

        <Link
          className="link"
          activeClassName="active"
          to="location"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
        >
          Location
        </Link>
      </div>
    </section>
  );
};
