// import aboutImage from '/images/about.png';
import Image from "/images/bgImage.png";

const Aboutsection = () => {
  return (
    <div className="bg-cover bg-center   h-96 opacity-85"
      style={{ backgroundImage: `url(${Image})` }}
    >
   
      {/* <h1 className="  text-center text-white p-20 font-semibold text-4xl">
        Welcome
      </h1> */}
     

      <section className=" flex  gap-10">
        <div className="flex-1  w-32">
          <h5 className="p-16 font-semibold  text-2xl text-center mt-14">
            Welcome to Astavision Vehicle Rental !!<br></br></h5>
            <p className="p-2 font-medium  text-center ">At Astavision, we offer a seamless and convenient way to rent vehicles for
            your travel needs. Whether you're planning a road trip, a business
            trip, or simply need a temporary vehicle, we've got you covered.
            With our easy-to-use booking platform, you can reserve the perfect
            vehicle for your journey in just a few clicks.</p>
          
        </div>
        <div className="flex-1  w-40 p-10 ">
          <img
            className="w-3/5 h-3/8    rounded mx-40"
            src="/images/intern1.png"
            alt=""
          />
        </div>
      </section>
    
    </div>
  );
};

export default Aboutsection;
