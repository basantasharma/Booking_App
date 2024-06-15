import { FaCheckCircle } from "react-icons/fa";

const Satisfaction = () => {
  return (
    <div className="bg-gray-200">
      <section className=" flex  gap-10 ">
        <div className="flex-1  w-32">
          <h1 className="font-semibold text-center mt-16 text-3xl">
            Why Us & What we stand for
          </h1>
          <h5 className="p-16 ">
            Our motto is more than just a platform for arranging
            transportation; it's a commitment to seamless journeys and
            unparalleled convenience. What sets us apart is our unwavering
            dedication to user satisfaction and safety. We stand for
            reliability, ensuring that every ride booked through our app is
            prompt and dependable. Moreover, we prioritize transparency,
            providing transparent pricing and clear communication every step of
            the way. Our commitment to innovation drives us to continually
            enhance our services, incorporating cutting-edge technology to
            improve the user experience.  
          </h5>
        </div>
        <div className="flex-1  w-32">
          <h1 className="font-semibold text-center mt-16 text-3xl">
            We Believe:
          </h1>
          <div className="box-content h-auto w-auto  p-16  border-4 bg-black rounded-2xl mt-12 mx-20 mb-16">
            <div>
              <p className=" inline-flex text-white gap-5 mb-4">
                <FaCheckCircle className="mt-2" /> 100% client satisfaction
              </p>

              <p className=" inline-flex text-white gap-5 mb-4">
                <FaCheckCircle className="mt-2" /> We strictly abide by safety
                and security procedures.
              </p>
              <p className=" inline-flex text-white gap-5 mb-4">
                <FaCheckCircle className="mt-2" /> We care, respect, and protect
                our environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Satisfaction;
