import React from "react";
import Navigation from "../../components/HomePages/Navigation";
import heriImage from "/images/heroImage.png";
import Footer from "../../components/HomePages/Footer";
import Herosection from "../../components/HomePages/Herosection";

const CompanyProfile = () => {
  return (
    <div>
      <Navigation />
      <Herosection name="About us" />

      <div className="box-content content-center mt-12  w-5/6 text-center  max-h-96  rounded-2xl border-black ">
        <div className="bg-black text-white">
          <h1 className="font-medium text-4xl text-center p-10 ">About</h1>
          {/* <hr  /> */}
          <section className=" flex  gap-10">
            <div className="flex-1  w-32">
              <h5 className="p-16">
                Ditch the hailing and waiting! In today's digital world, vehicle
                booking apps have revolutionized transportation. With a few taps
                on your phone, you can browse a variety of car types, from
                budget-friendly sedans to spacious SUVs, all within the app.
                These apps connect you with drivers in your area, allowing you
                to book a ride instantly and track its arrival in real-time. No
                more haggling over fares – the price is displayed upfront,
                ensuring a transparent and hassle-free experience.
              </h5>
            </div>
            <div className="flex-1  w-40 p-16 ">
              <img
                className="w-9/12  mx-16 "
                src="https://th.bing.com/th/id/R.25b3e9fa078a072109ed23fc513bd818?rik=be3pqlHljGIGig&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CompanyProfile;
