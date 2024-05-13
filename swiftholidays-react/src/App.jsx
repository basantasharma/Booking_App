import "./App.css";
import Aboutsection from "./components/HomePages/Aboutsection";
import Download from "./components/HomePages/Download";
import Satisfaction from "./components/HomePages/Satisfaction";

import Herosection from "./components/HomePages/Herosection";
import Navigation from "./components/HomePages/Navigation";
import { RouterProvider } from "react-router-dom";
// import router from "./router.jsx";

import Footer from "./components/HomePages/Footer";
import Contactentry from "./components/HomePages/Contactentry";
import Select123 from "./components/HomePages/Select123";
import Form12 from "./components/Form12";

function App() {
  return (
    <>
      <Navigation />

      <Herosection formsection={<Select123 />} />
      <Aboutsection />
      <Satisfaction />
      <Download />
      <Contactentry />
      <Footer />
    </>
  );
}

export default App;
