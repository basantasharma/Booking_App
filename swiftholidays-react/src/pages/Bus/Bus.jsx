import React from "react";
import Navigation from "../../components/HomePages/Navigation";
import Footer from "../../components/HomePages/Footer";
import Herosection from "../../components/HomePages/Herosection";

const Bus = () => {
  return (
    <div>
      <Navigation />
      <Herosection B="Our Bus" />
      <div className="container">
        <div>
          <div className=" text-center font-semibold text-3xl p-14">
            Our Bus
          </div>
          <div>
            <div className=" inline-flex gap-24 mx-16">
              <div>
                <img
                  className="h-40 w-80 mx-14"
                  src="https://swiftholidays.com.np/images/sofa.jpg"
                  alt=""
                />
              </div>
              <p className="p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ad ipsa voluptates reprehenderit est officiis nam,
                praesentium laboriosam exercitationem, nesciunt dicta! Officiis
                quas eius tempora quis accusantium nemo iure cumque. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quos officia
                corrupti laboriosam reiciendis velit. Suscipit voluptatum
                officiis quibusdam laudantium impedit ut! Excepturi ipsum
                praesentium vero, sit rem eveniet dolore iste?
              </p>
            </div>

            <div>
              <div className=" inline-flex gap-24 mx-16">
                <div>
                  <img
                    className="h-40 w-80 mx-14 mt-12"
                    src="https://swiftholidays.com.np/images/sofa.jpg"
                    alt=""
                  />
                </div>
                <p className="p-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ad ipsa voluptates reprehenderit est officiis nam,
                  praesentium laboriosam exercitationem, nesciunt dicta!
                  Officiis quas eius tempora quis accusantium nemo iure cumque.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  officia corrupti laboriosam reiciendis velit. Suscipit
                  voluptatum officiis quibusdam laudantium impedit ut! Excepturi
                  ipsum praesentium vero, sit rem eveniet dolore iste?
                </p>
              </div>
              <div>
                <div className=" inline-flex gap-24 mx-16 ">
                  <div>
                    <img
                      className="h-40 w-80 mx-14 mt-12 "
                      src="https://swiftholidays.com.np/images/sofa.jpg"
                      alt=""
                    />
                  </div>
                  <p className="p-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis ad ipsa voluptates reprehenderit est officiis nam,
                    praesentium laboriosam exercitationem, nesciunt dicta!
                    Officiis quas eius tempora quis accusantium nemo iure
                    cumque. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Quos officia corrupti laboriosam reiciendis velit.
                    Suscipit voluptatum officiis quibusdam laudantium impedit
                    ut! Excepturi ipsum praesentium vero, sit rem eveniet dolore
                    iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Bus;
