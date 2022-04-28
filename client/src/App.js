import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

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
      <FooterPages />
    </>
  );
}

export default App;
