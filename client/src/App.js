import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import { about, home, location, menu, reservation, welcome } from "./pages";

import { Home, About, FooterPages } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Home />
        <About />
      </Router>
      {/* footer */}
      <br />
      <FooterPages />
    </>
  );
}

export default App;
