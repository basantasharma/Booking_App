const Navigation = () => {
  return (
    <div className="sticky top-0 z-10 bg-zinc-200 " >
    <nav className=" flex-1">
        <div className="logo ">
          <img
            className="w-36 ml-8 "
            src="src/swiftholidayslogo.png"
            alt="logo"
          />
        </div>

        <ul className="flex gap-14 justify-end mr-6 ">
          <li>Home </li>
          <li> Company Profile</li>
          <li>Our Service </li>
          <li> Bus</li>
          <li> Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation
