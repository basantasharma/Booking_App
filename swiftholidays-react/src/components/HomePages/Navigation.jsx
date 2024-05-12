const Navigation = () => {
  return (
    <div className="sticky top-0 z-10 bg-zinc-200 ">
      <nav className=" flex-1">
        <div className="logo ">
          <img
            className="w-36 ml-8 "
            src="/logos/swiftholidayslogo.png"
            alt="logo"
          />
        </div>

        <ul className="flex gap-14 justify-end mr-6 ">
          <li href="">Home </li>
          <li href=""> Company Profile</li>
          <li href="">Our Service </li>
          <li href=""> Bus</li>
          <li href=""> Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
