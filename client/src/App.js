import React from "react";

import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

// import { about, home, location, menu, reservation, welcome } from "./pages";

import { Home, About, FooterPages, Reservation } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Home />
        <About />
        <Reservation />
      </Router>
      {/* footer */}
      <br />
      <FooterPages />
    </>
  );
}

export default App;
