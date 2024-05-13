import React from "react";

const Form12 = () => {
  return (
    <div>
      <div className="px-10 ">
        <form action="#" method="post" className="py-4">
          <h1 className=" block text-lg font-bold mb-2 pb-2 mx-2 item-center">
            Contact Swift Holidays
            {/* {props.name} */}
            
            
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
    </div>
  );
};

export default Form12;
