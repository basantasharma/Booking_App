import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import bgImage from "/images/download.jpg";
const Download = () => {
  return (
    <div
      className="bg-cover bg-center  bg-fixed h-screen opacity-75"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="grid grid-cols-2">
        <div > 
          <img className="w-2/4 p-12 mt-32 mx-12" src="/images/download2.jpg" alt="" />
        </div>
        <div >
          <h1 className=" mt-56 text-5xl font-semibold ">Download App</h1>
          <h1 className="text-3xl mt-6 font-medium">Don't Wait! <br />Grab the offer. Book Bus Ticket....... </h1>
          <div className="mt-14 inline-flex ">
            <button type="" className="bg-white hover:bg-gray-300 text-gray-800 font-medium p-1 border rounded-md  mx-2 "><p className="inline-flex text-xl"><FaGooglePlay className="mt-2 mx-2"/>Google Play</p></button>
            <button type="" className="bg-white hover:bg-gray-300 text-gray-800 font-medium p-1 border rounded-md "><p className="inline-flex text-xl"><FaApple className="mt-2 mx-2"/>App Store</p></button>
         
           

          </div>
         
         



        </div>
      </div>
    </div>
  );
};

export default Download;
