import React from "react";
import Navigation from "../../components/HomePages/Navigation";
import Footer from "../../components/HomePages/Footer";
import Herosection from "../../components/HomePages/Herosection";

const Printticket = () => {
  return (
    <div>
      <Navigation />
      <Herosection P="Print  Ticket" />
      <div className="p-16 mx-8 text-center ">
        <form action="">
          <div className=" inline-flex gap-12">
            <div className="text-xl">
              Ticket No.
              <input
                type="text"
                placeholder=""
                className=" block    rounded-lg  py-2.5 ring-1  ring-gray-300 focus:ring-2 mt-3 "
              />
            </div>
            <div className="text-xl">
              Contant Us
              <input
                type="text"
                placeholder=""
                className=" block  rounded-lg  py-2.5 ring-1  ring-gray-300 focus:ring-2 mt-3  "
              />
            </div>
          </div>
          <div className="text-center">
            <input
              type="button"
              value="Submit"
              className=" block w-1/3   rounded-lg  py-2.5 bg-green-500 hover:bg-green-600 hover:text-white mt-8 mx-auto "
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Printticket;
