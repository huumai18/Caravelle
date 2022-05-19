import { Link } from "react-scroll";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <section className="nav">
      <div className="nav-container">
        <Link className="home" to="home" smooth={true}>
          <h2>Caravelle</h2>
        </Link>
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
            href="#about"
            className="link"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            About
          </Link>
          <Link
            className="link"
            href="#menu"
            to="menu"
            spy={true}
            smooth={true}
            offset={5}
            duration={800}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Menu
          </Link>
          <Link
            className="link"
            to="reservation"
            href="#reservation"
            spy={true}
            smooth={true}
            offset={5}
            duration={1200}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Reservation
          </Link>
          <Link
            className="link"
            href="#location"
            to="location"
            spy={true}
            smooth={true}
            offset={5}
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
