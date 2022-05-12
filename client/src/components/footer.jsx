import { Button } from "@mui/material";
import React, { useState } from "react";
import { ContactModal } from "./modal/contactModal";

export const Footer = () => {
  const [open, handleOpen] = useState(false);
  return (
    <section className="footer" id="contact">
      <div className="footer-container">
        <div className="left-footer">
          <div className="left-text">
            <h2>Ready to get started?</h2>
            <p>
              Lorem ipsum dolar sot amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <Button
              className="button"
              sx={{ mt: "2em" }}
              onClick={() => handleOpen(true)}
            >
              Contact Us
            </Button>
            {open && <ContactModal OpenModal={handleOpen} />}
          </div>
        </div>
        <div className="right-footer">
          <div className="right-links">
            <p>
              <span>Navigation</span>
            </p>
            <ul>
              <li>
                <a href="/">Email Marketing</a>
              </li>
              <li>
                <a href="/">Campaigns</a>
              </li>
              <li>
                <a href="/">Branding</a>
              </li>
              <li>
                <a href="/">Offline</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
