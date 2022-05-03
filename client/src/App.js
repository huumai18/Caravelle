import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
// import { about, home, location, menu, reservation, welcome } from "./pages";
import { Home, About, Reservation, Location, FooterPages } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Home />
        <About />
        <Reservation />
        <Location />
      </Router>
      {/* footer */}
      <br />
      <FooterPages />
    </>
  );
}

export default App;
