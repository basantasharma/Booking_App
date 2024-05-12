import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home";
import CompanyProfile from "./pages/Companyprofile/About.jsx";

const router =  createBrowserRouter([
    

    { 
        path: "/",
     element: <App /> 
    },
    {

        path:"/Company-Profile",
        element:<CompanyProfile/>   
    }
  
] 
)

export default router;
 