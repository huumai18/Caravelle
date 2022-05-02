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
    <section className="location">
      <img
        style={{ width: "90%", height: "100%", position: "absolute" }}
        src={LocationImage}
        alt="location background"
      />
      <div className="container">
        <div className="location direction">
          <div className="location headings">
            <h2>
              Come And Join Us at CARAVELLE 123 Miain Str Calgary A1A 1A1!!
            </h2>
            <Button
              style={{
                filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
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
