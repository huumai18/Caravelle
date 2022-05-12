import {
  Narrow,
  sushiImg1,
  ramenImg,
  sushiImg2,
  cocktail,
  vector1,
  vector2,
} from "../../images";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { MenuModal } from "../../components/menuModal";

export const Menu = () => {
  const [open, handleOpen] = useState(false);
  return (
    <section className="menu" id="menu">
      <div className="container">
        <img className="vector vector1" src={vector1} alt="vector1" />
        <img className="vector vector2" src={vector2} alt="vector2" />
        <div className="menu-header">
          <h1>Welcome</h1>
        </div>
        <div className="menu-text">
          <p>
            Located in the heart of Litile Italy, Sorrento restaurant pizzeria
            bring sleek modern design
            <img className="narrow-img" src={Narrow} alt="Narrow" />
            <Button className="button" onClick={() => handleOpen(true)}>
              See our menu
            </Button>
            {open && <MenuModal OpenModal={handleOpen} />}
          </p>
        </div>
        <div className="menu-images">
          <img className="model model-left" src={sushiImg1} alt="model" />
          <img className="model model-right" src={ramenImg} alt="model" />
          <img className="model model-left" src={sushiImg2} alt="model" />
          <img className="model model-right" src={cocktail} alt="model" />
        </div>
      </div>
    </section>
  );
};
