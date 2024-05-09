import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Herosection from "./components/Herosection";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contactentry from "./components/Contactentry";

import Home from "./pages/Home/Home";
// import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
// import ContactUs from "./pages/ContactUs/ContactUs";
// import OurService from "./pages/OurService/OurService";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/CompanyProfile" element={<CompanyProfile />} />
            <Route path="/Bus" element={<Bus />} />
            <Route path="/OurService" element={<OurService />} /> */}
        </Routes>
      </BrowserRouter>

      <Herosection />
      <Contactentry />
      <Footer />
    </div>
  );
}

export default App;
