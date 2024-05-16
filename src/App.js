import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./pages/home/Nav";
import Footer from "./pages/home/Footer";
import "./assets/style.css"



function App() {

  return (
    <>
      <Nav />
      <br />
      <Outlet />
      <br />
      <Footer />
    </>
  );
}

export default App;
