import React from "react";
import Navigation from "../../components/HomePages/Navigation";
import Herosection from "../../components/HomePages/Herosection";
import Form12 from "../../components/Form12";
import Footer from "../../components/HomePages/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navigation />
      <Herosection name="Contact Us" />

      <div className="flex flex-cols-2 justify-around py-20">
        <Form12 />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1264.3337971010944!2d84.42232823351412!3d27.696990177499643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1715512315453!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
