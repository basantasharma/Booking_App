import React from "react";
import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="sticky top-0 z-10 bg-zinc-200 ">
      <nav className=" flex justify-between">
        <div className="logo ">
          <img
            className="w-36 ml-8 "
            src="src/swiftholidayslogo.png"
            alt="logo"
          />
        </div>

        <div className="flex gap-14 mr-6 items-center">
          
          <NavLink to="/">
            {" "}
            <li>Home </li>
          </NavLink>
          <NavLink to="/Company-Profile">
            <li> Company Profile</li>
          </NavLink>
          
          {/* <NavLink href="/">
            {" "}
            <li>Our Service </li>
          </NavLink>
          <NavLink href="/">
            {" "}
            <li> Bus</li>
          </NavLink>
          <NavLink href="/">
            <li> Contact Us</li>
          </NavLink> */}
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
