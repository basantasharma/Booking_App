import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import CompanyProfile from "./pages/Companyprofile/About.jsx";
import About from "./pages/Companyprofile/About.jsx";
import "./index.css";
import { RouterProvider } from 'react-router-dom'
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
