import React from "react";
import Navigation from "../../components/Navigation";
import heriImage from "/images/heroImage.png";
import Footer from "../../components/Footer";

const CompanyProfile = () => {
  return (
    <div>
      <Navigation />
      <div
        className="bg-cover bg-center h-screen opacity-65 bg-fixed"
        style={{ backgroundImage: `url(${heriImage})` }}
      >
        <h1 className="text-center text-4xl p-20 font-semibold">About Us</h1>
      </div>
      <div>
        <h1 className="font-medium text-3xl text-center p-10">About</h1>
        <section className=" flex  gap-10">
          <div className="flex-1  w-32">
            <h5 className="p-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laudantium, quibusdam minima dolorum tempore at? Consequuntur
              labore suscipit voluptatem perferendis corporis ipsam sed, nam
              provident et consectetur assumenda esse. Culpa?Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quas, nobis deserunt
              suscipit laboriosam nemo, pariatur consequuntur voluptas debitis
              quam voluptate ab magni sunt nesciunt voluptatum atque quia sit,
              nulla alias!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas, nobis deserunt suscipit laboriosam nemo, pariatur
              consequuntur voluptas debitis quam voluptate ab magni sunt
              nesciunt voluptatum atque quia sit, nulla alias!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quas, nobis deserunt
              suscipit laboriosam nemo, pariatur consequuntur voluptas debitis
              quam voluptate ab magni sunt nesciunt voluptatum atque quia sit,r
            </h5>
          </div>
          <div className="flex-1  w-40 p-16 ">
            <img
              className="w-9/12 rounded mx-16"
              src="https://th.bing.com/th/id/OIP.za5TrxXsDJNakflK_a14QQHaFY?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyProfile;
