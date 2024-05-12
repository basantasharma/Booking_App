import { FaCheckCircle } from "react-icons/fa";

const Satisfaction = () => {
  return (
    <div>
      <section className=" flex  gap-10">
        <div className="flex-1  w-32">
          <h1 className="font-semibold text-center mt-16 text-3xl">
            Why Us & What we stand for
          </h1>
          <h5 className="p-16 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laudantium, quibusdam minima dolorum tempore at? Consequuntur labore
            suscipit voluptatem perferendis corporis ipsam sed, nam provident et
            consectetur assumenda esse. Culpa?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas, nobis deserunt suscipit
            laboriosam nemo, pariatur consequuntur voluptas debitis quam
            voluptate ab magni sunt nesciunt voluptatum atque quia sit, nulla
            alias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            nobis deserunt suscipit laboriosam nemo, pariatur consequuntur
            voluptas debitis quam
          </h5>
        </div>
        <div className="flex-1  w-32">
          <h1 className="font-semibold text-center mt-16 text-3xl">
            We Believe:
          </h1>
          <div className="box-content h-auto w-auto  p-16  border-4 bg-slate-500 rounded-2xl mt-12 mx-20 mb-16">
            <div>
             
              <p className=" inline-flex text-white gap-5 mb-4"><FaCheckCircle className="mt-2" /> 100% client satisfaction</p>
              
              <p className=" inline-flex text-white gap-5 mb-4"><FaCheckCircle className="mt-2" /> We strictly abide by safety and security procedures.</p>
              <p className=" inline-flex text-white gap-5 mb-4"><FaCheckCircle className="mt-2" />  We care, respect, and protect our environment.</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Satisfaction;
