const Navigation = () => {
  return (
    <div className="">
      <nav className=" flex-1 bg-zinc-200  sticky ">
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
