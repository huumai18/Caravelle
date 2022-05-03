import { Link } from "react-scroll";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <section className="nav">
      <div className="container">
        <h2>Caravelle</h2>
        <Hamburger
          size={25}
          color="white"
          rounded
          toggled={close}
          toggle={setClose}
          aria-expanded={close}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
        />
        <div className={`nav-links ${open ? "" : "closed"}`}>
          <Link
            to="home"
            activeClass="active"
            className="link"
            smooth={true}
            offset={-10}
            spy={true}
            duration={700}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
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
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
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
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
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
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Location
          </Link>
        </div>
      </div>
    </section>
  );
};
