import "./App.css";
import Aboutsection from "./components/Aboutsection";
import Download from "./components/Download";
import Satisfaction from "./components/Satisfaction";

import Herosection from "./components/Herosection";
import Navigation from "./components/Navigation";
import { RouterProvider } from "react-router-dom";
// import router from "./router.jsx";

import Footer from "./components/Footer";
import Contactentry from "./components/Contactentry";

function App() {
  return (
    <>
      <Navigation />
      <Herosection />
      <Aboutsection />
      <Satisfaction />
      <Download />
      <Contactentry />
      <Footer />
    </>
  );
}

export default App;
