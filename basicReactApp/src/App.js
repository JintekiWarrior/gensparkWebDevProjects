import React from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
