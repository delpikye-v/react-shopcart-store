import React from "react";
import BannerImage from "../components/Common/BannerImage";
import Contact from "../components/Contact";
import ContactBackground from "../assets/images/contact-background.jpeg";

function ContactPage() {
  return (
    <>
      <BannerImage img={ContactBackground} />
      <Contact />
    </>
  );
}

export default ContactPage;
