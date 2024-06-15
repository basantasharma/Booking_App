const Select123 = () => {
  return (
    <div>
      <div className="row  grid grid-cols-2">
        <div className="column p-36 ">
          <h2 className="text-white text-2xl font-semibold mb-4 ml-12">Enquiry Form</h2> 
          <select
            id="place"
            name="place"
            //   autoComplete="city-name"
            className="block w-3/5  rounded-lg  py-1.5 ring-1  ring-gray-300 focus:ring-2 mt "
          >
            {" "}
            <option>From</option>
            <option>Kathmandu</option>
            <option>Chitwan</option>
            <option>Mustang</option>
          </select>

          <input
            type="text"
            placeholder="To"
            className="block w-3/5  rounded-lg  py-1.5 ring-1  ring-gray-300 focus:ring-2 mt-3"
          />

          <input
            type="date"
            placeholder="Department Date"
            className=" w-4/8  rounded-lg  py-2.5 ring-1  ring-gray-300 focus:ring-2 mt-3  mx-2"
          />

          <input
            type="Date"
            placeholder="Return Date"
            className=" w-4/8  rounded-lg  py-2.5 ring-1  ring-gray-300 focus:ring-2 "
          />

          <input
            type="button"
            value="Search"
            className="block w-3/5  rounded-lg  py-1.5 bg-gray-900  text-white hover:bg-gray-600 hover:text-white mt-3"
          />
        </div>
        <div className="column  mt-44 ml-24 ">
          <h5 className=" text-white text-2xl font-semibold">For Rent $10 per day</h5>
          <h2 className="text-white text-4xl font-semibold">Rent Now and Get 25% Off !!!</h2>
          
          <button type="submit" className="bg-black  hover:bg-gray-900 text-white font-medium  border rounded-md w-1/6 mt-6 py-1.5">Rent</button>


        </div>
      </div>
    </div>
  );
};

export default Select123;
