import { Button } from "@mui/material";
import { Narrow, reservation1, reservation2 } from "../../images";

export const Reservation = () => {
  return (
    <div className="container">
      <div className="reservation-box">
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

        <div className="reservation-images">
          <div className="images-left">
            <img src={reservation1} alt="reservation1" />
          </div>
          <div className="images-right">
            <img src={reservation2} alt="reservation1" />
          </div>
        </div>
      </div>
    </div>
  );
};
