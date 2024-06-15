import React from "react";
import Navigation from "../../components/HomePages/Navigation";
import Footer from "../../components/HomePages/Footer";
import Herosection from "../../components/HomePages/Herosection";

const OurService = () => {
  return (
    <div>
      <Navigation />
      <Herosection name="Our Services" />
      <div>
        <h1 className="font-bold text-3xl text-center p-10  font-sans  ">
          What We Do
        </h1>
        <p className="container px-20 text-xl text-justify " >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo
          minus sit, velit odit necessitatibus animi culpa eveniet nesciunt
          repellat. Saepe ducimus tempora dolore modi corporis sequi cum debitis
          a! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Praesentium modi asperiores sunt voluptatem voluptatum magnam ducimus
          itaque, minima minus omnis, ullam, commodi dicta a dolores placeat
          earum. Laboriosam, sunt enim? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Suscipit laborum ipsam nam autem earum nesciunt quos
          dolorem sunt ttaiempora, possimus illum at mollitia similique saepe,
          voluptates expedita officiis laudantium libero!
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center font-sans p-10 ">
          A brief list of our services
        </h1>
        <div className="">
        <ul className="text-xl font-sans  container list-disc px-20 text-justify ">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quo minus sit
          </li>
          <li>
            dolor sit, amet consectetur adipisicing elit. Praesentium modi
          </li>
          <li>
            ullam, commodi dicta a dolores placeat earum. Laboriosam, sunt enim?
          </li>
          <li>
            Suscipit laborum ipsam nam autem earum nesciunt quos dolorem sunt
            tempora, possimus
          </li>
        </ul>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl p-10 text-center ">
          How We Are Different
        </h1>
        <p className="text-xl container px-20 py-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quis
          magnam voluptate iste dignissimos soluta officiis cupiditate eius
          incidunt, beatae exercitationem libero molestias illo a velit sunt
          atque laboriosam fugiat? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Sint modi culpa ipsa. Esse natus modi quibusdam
          commodi aut. Velit quaerat temporibus ipsa ea alias. Dolorem dolor
          numquam magnam. Impedit, consequuntur. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Earum facere impedit inventore veniam
          quisquam dolore quasi alias fugiat, ipsam non officiis delectus iste
          nostrum ratione! Ratione quisquam iure voluptates molestias?
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default OurService;
