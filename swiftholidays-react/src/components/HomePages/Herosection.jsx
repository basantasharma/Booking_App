import React from "react";

// import heriImage from '../../public/images/heroImage.png';
import heriImage from "/images/intern.png";
// import Select123 from "./Select123";

// import bgImage from './hero.png'; // Assuming hero.png is in the same directory as this component

const Herosection = (props) => {
  console.log(props.name);
  return (
    <div
      className="bg-cover bg-center h-screen opacity-70 bg-fixed"
      style={{ backgroundImage: `url(${heriImage}` }}
    >
      <div className="text-5xl items-center  text-white text-center p-10 font-bold">
        {props.name}
      </div>
      <div>{props.formsection}</div>

      {/* <h2>Your component content</h2> */}
      {/* <Select123 /> */}
    </div>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-swipe/6.0.4/react-swipe.min.js" integrity="sha512-IBbf8MjstDTBNn716KqdEtnR+BbpzkyJbMfF1B2o5Vfkte5C2LtIftgaMVvDMWQu2/hefY4zDP/gLVSWxyQ1NQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

