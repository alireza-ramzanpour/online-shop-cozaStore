import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/style.css"



function App() {

  return (
    <>
      <Header />
      <br />
      <Outlet />
      <br />
      <Footer />
    </>
  );
}

export default App;
