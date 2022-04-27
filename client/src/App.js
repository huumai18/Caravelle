import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import { about, home, location, menu, reservation, welcome } from "./pages";
import { Home, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;
