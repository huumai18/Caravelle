import { Button } from "@mui/material";

export const Nav = () => {
  return (
    <div className="container">
      <div className="links-nav">
        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Reservation</Button>
        <Button variant="text">Menu</Button>
        <Button variant="text">Text</Button>
      </div>
    </div>
  );
};
