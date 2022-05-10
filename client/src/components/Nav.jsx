import { Link } from "react-scroll";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <section className="nav">
      <div className="container">
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
            activeClassName="active"
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
            activeClassName="active"
            className="link"
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
            activeClassName="active"
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
          <Button
            variant="container"
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Contact
          </Button>{" "}
          {/*open modal*/}
        </div>
      </div>
    </section>
  );
};
