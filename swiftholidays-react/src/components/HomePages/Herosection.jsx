import React from "react";
// import heriImage from '../../public/images/heroImage.png';
import heriImage from "/images/heroImage.png";
// import Select123 from "./Select123";

// import bgImage from './hero.png'; // Assuming hero.png is in the same directory as this component

const Herosection = (props) => {
  console.log(props.name);
  return (
    <div
      className="bg-cover bg-center h-screen opacity-65 bg-fixed"
      style={{ backgroundImage: `url(${heriImage}` }}
    >
      <div className="text-4xl items-center  text-center p-10 font-bold">
        {props.name}
      </div>
      <div>{props.formsection}</div>

      {/* <h2>Your component content</h2> */}

      
      {/* <Select123 /> */}    </div>
  );
};
export default Herosection;
// export default function()
// {
//     return <div>
//         <Herosection>
//         </Herosection>

//     </div>
// };
