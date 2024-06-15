import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./views/login.jsx";
import Register  from "./views/register.jsx";
// import Default  from "./components/layout/Default.jsx";
// import Guest  from "./components/layout/Guest.jsx";
import User from "./views/user.jsx";

import Home from "./pages/Home";
import CompanyProfile from "./pages/Companyprofile/About.jsx";
import Mottovision from "./pages/Companyprofile/Mottovision.jsx";
import Bus from "./pages/Bus/Bus.jsx";
import PrintTicket from "./pages/Bus/Printticket.jsx";
import Cancel from "./pages/Bus/Cancel.jsx";
import BusTrack from "./pages/Bus/BusTrack.jsx";
import Contactus from "./pages/ContactUs/ContactUs.jsx";
import Ourservices from "./pages/OurService/OurService.jsx";


const router =  createBrowserRouter([
    // {
    //     path:'/',
    //     element:<Guest/>,
    //     children:[
    //         {
    //         path:'/login',
    //         element:<Login/>,
    //         },
    //         {
    //             path:'/register',
    //             element:<Register/>,
    //         }
    //     ]
    // },
    // {
    //     path:'/',
    //     element:<Default/>,
    //     children:[
    //         {
    //         path:'/login',
    //         element:<User/>,
    //         }
    //     ]
    // },
    // {
    //     path:'/',
    //     element:<Guest/>,
    //     children:[
    //         {
    //         path:'/login',
    //         element:<Login/>,
    //         },
    //         {
    //             path:'/register',
    //             element:<Register/>,
    //         }
    //     ]
    // },

    //childern root allow to modulize our routing config.

   
    

    { 
        path: "/",
     element: <App /> 
    },
    {

        path:"/company-profile",
        element:<CompanyProfile/>   
    },
     {

        path:"/Mottovision",
        element:<Mottovision/>
    },
    {
        path:"/Bus",
        element:<Bus />
    },
    {
        path:"/Print-ticket",
        element:<PrintTicket/>  
    },
    {
        path:"/Cancel",
        element:<Cancel/>
    },
    {
        path:"/Bus-Track",
        element:<BusTrack/>
    },
    {
        path:"/contact-us",
        element:<Contactus />
    },
    {
        path:"/our-services",
        element:<Ourservices />
    }

  
] 
)

export default router;
 