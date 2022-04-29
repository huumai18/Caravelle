import { Button } from "@mui/material";

export const Location = () => {
  return (
    <div className="container location">
      <div className="location-container">
        <div className="location get-direction">
          <h2>Come And Join Us at CARAVELLE 123 Miain Str Calgary A1A 1A1!!</h2>
          <Button variant="text">Get Direction </Button>
        </div>
        <div className="location map"></div>
      </div>
    </div>
  );
};
