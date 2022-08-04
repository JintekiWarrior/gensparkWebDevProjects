import React from "react";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
