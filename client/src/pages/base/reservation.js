import {
  Narrow,
  reservation1,
  reservation2,
  reservation3,
  reservation4,
} from "../../images";
import { Button } from "@mui/material";
import React from "react";

export const Reservation = () => {
  return (
    <section className="reservation">
      <div className="container">
        <div className="reservation-header">
          <h1>Welcome</h1>
        </div>

        {/* Text Reservation */}

        <div className="reservation-text">
          <p>
            Located in the heart of Litile Italy, Sorrento restaurant pizzeria
            bring sleek modern design
            <img className="narrow-img" src={Narrow} alt="Narrow" />
            <Button className="reservation-line-button">
              Make Reservation
            </Button>
          </p>
        </div>

        {/* Image Reservation */}

        <div className="hero">
          <img className="model-left" src={reservation1} alt="model" />
          <img className="model-right" src={reservation2} alt="model" />
          <img className="model-right2" src={reservation3} alt="model" />
          <img className="model-left2" src={reservation4} alt="model" />
        </div>
      </div>
    </section>
  );
};
