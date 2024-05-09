import React from "react";
import map from "/images/map1.jpg";

const Contactentry = () => {
  return (
    <div>
      <div className="flex flex-cols-2 justify-around px-4">
        <div className="px-10 ">
          <form action="#" method="post" className="py-4">
            <h1 className=" block text-lg font-bold mb-2 pb-2 mx-2 item-center">
              Contact Swift Holidays
            </h1>
            <input
              type="text"
              placeholder="FullName"
              className=" w-1/8 rounded-xl py-2 ring-2 ring-gray-300 focus:ring-2 shadow-lg mx-6 font-thin "
            />
            <input
              type="Email"
              placeholder="Email"
              className="  w-1/8 py-2 ring-2 ring-gray-300 focus:ring-2 mx-2 rounded-xl shadow-lg "
            />
            <textarea
              className=" block w-1/4 px-4 rounded-lg ring-gray-300 my-4 py-8 mx-6  shadow-lg focus-ring-2 "
              name="message"
              placeholder="Describe message"
            ></textarea>

            <button
              className="w-1/8 py-2 bg-green-600 text-white my-4 px-4 mx-10 rounded-full "
              type="submit"
            >
              Submit Form
            </button>
          </form>
        </div>
        {/* columns2 */}

        <div
          className="flex  bg-cover bg-center min-w-[640px]  justify-center items-center align-center"
          style={{ backgroundImage: `url(${map})` }}
        >
          {/* Card  */}
          <div className="rounded-lg font-white bg-gray-300 ring-2 mt-5 text-black w-2/4 justify-center align-center items-center text-lg">
            <div className="m-4 text-center">
              <h2 className="block">Location</h2>
              <h2 className="block">Phone-No</h2>
              <h2 className="block">Gmail-Id</h2>
            </div>

            <div className=" bg-orange-300 py-2 rounded-lg justify-center items-center text-black px-4 container-auto ring-2 ring-orange-300">
              <a className="  " href="#">
                Direction
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactentry;
