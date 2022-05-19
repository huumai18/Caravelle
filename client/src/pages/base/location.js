import { Button } from "@mui/material";
import { Map } from "../../components/Map.jsx";
import { LocationImage } from "../../images";

export const Location = () => {
  const location = {
    address: "Emerson Avenue East,Calgary, ab, Canada",
    lat: 51.049999,
    lng: -114.066666,
  };
  return (
    <section className="location" id="location">
      <div className="container">
        <img
          style={{
            position: "absolute",
            borderRadius: "0.5em",
            zIndex: "-1",
          }}
          d
          src={LocationImage}
          alt="location background"
        />
        <div className="location direction">
          <div className="location headings">
            <h2>
              Come And Join Us at CARAVELLE 123 Miain Str Calgary A1A 1A1!!
            </h2>
            <Button
              className="button"
              style={{
                filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
                marginBottom: "1em",
              }}
              variant="text"
            >
              Get Direction{" "}
            </Button>
          </div>
        </div>

        <Map location={location} zoomLevel={17} />
      </div>
    </section>
  );
};
