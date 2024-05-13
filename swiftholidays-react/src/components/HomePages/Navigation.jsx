import{Link} from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="sticky top-0 z-10 bg-zinc-200  ">
      <nav className=" flex justify-around items-center">
        <div className="logo  ">
          <img
            className="w-36 ml-8 "
            src="/logos/swiftholidayslogo.png"
            alt="logo"
          />
        </div>

        <ul className="flex   gap-14  mr-6  ">
          <li ><Link to="/">Home</Link></li>
          <li><Link to="/company-profile">Company Profile</Link></li>
          <li><Link to="/our-services">Our Service</Link></li>
          <li><Link to="/Bus">Bus</Link></li>
          <li><Link to="/contact-us">Contact us</Link> </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
