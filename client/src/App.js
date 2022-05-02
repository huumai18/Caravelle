import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import { about, home, location, menu, reservation, welcome } from "./pages";
import { Home, About, Reservation, Location, FooterPages } from "./pages";

function App() {
  return (
    <>
      <Router>
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
