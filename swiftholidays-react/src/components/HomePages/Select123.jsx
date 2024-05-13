const Select123 = () => {
  return (
    <div>
      <div className="row">
        <div className="column p-36">
          <select
            id="place"
            name="place"
            //   autoComplete="city-name"
            className="block w-1/4  rounded-lg  py-1.5 ring-1  ring-gray-300 focus:ring-2 mt "
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
            className="block w-1/4  rounded-lg  py-1.5 ring-1  ring-gray-300 focus:ring-2 mt-3"
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
            className="block w-1/4  rounded-lg  py-1.5 bg-orange-300 hover:bg-orange-600 hover:text-white mt-3"
          />
        </div>
      </div>
    </div>
  );
};
export default Select123;
