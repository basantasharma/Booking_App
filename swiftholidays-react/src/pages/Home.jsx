import React from "react";
import Navigation from "../components/HomePages/Navigation";
import Footer from "../components/HomePages/Footer";
import Herosection from "../components/HomePages/Herosection";

export default function Home() {
  return (
    <div>
      <Navigation />
      {/* <div
      className="bg-cover bg-center h-screen opacity-65 bg-fixed"
      style={{ backgroundImage: `url(${heriImage})` }}
    ></div>  */}
      <Footer />
    </div>
  );
}
