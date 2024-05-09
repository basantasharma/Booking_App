import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-cols-4 justify-around gap-10 items-center">
        {/* Column1 */}
        <div>
          <img
            className="w-10 h-10 px-20 "
            src="src/swiftholidayslogo.png"
            alt="logo"
          />
          <ul className="flex">
            <li className="mr-4">
              <a href="#" FaFacebookF size={24}></a>
            </li>
          </ul>
        </div>

        {/* Column2 */}
        <ul>
          <li className="text-lg font-semibold mb-4 ">Quick Links</li>
          <div className="list-disc">
            <li>About Us</li>
            <li>Our Motto & Vision</li>
            <li>Our Services</li>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
          </div>
        </ul>

        {/* Column3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="flex flex-row p-1 gap-2 m-2">
            <FaMapMarkerAlt size={18} />
            <p>khusibu Linkroad, Kathmandu 44600</p>
          </div>
          <hr />
          <div className="flex flex-row p-2 gap-2 m-2">
            <FaPhone size={18} />
            <p>+977 9851310236/37/38/39</p>
          </div>
          <hr />
          <div className="flex flex-row p-2 gap-2 m-2">
            <FaEnvelope size={18} />
            <p>swiftholidaysnepal@gmail.com</p>
          </div>
        </div>

        {/* Column4 */}
        <div>
          <h4 className="text-lg font-semibold mb-4  text-black-900">
            Development Partner
          </h4>
          <img
            src="https://swiftholidays.com.np/images/kit.jpg"
            className="w-[180px] h-auto"
            alt="image"
          />
          <p> Kunwar I.T. And Design Pvt.Ltd.</p>
          <p className="text-lg font-semibold m-4">Payment Partner </p>
          <img
            src="https://swiftholidays.com.np/images/payment.jpg"
            className="w-[180px] h-auto"
            alt="payment"
          />
        </div>
      </div>

      <div>
        {
          <svg xmlns="" viewBox="0 0 1440 260">
            <path
              fill="#3D405B"
              fill-opacity="1"
              d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        }
      </div>
    </>
  );
};

export default Footer;
