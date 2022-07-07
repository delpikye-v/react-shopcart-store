import React from "react";
import About from "../components/About";
import BannerImage from "../components/Common/BannerImage";
import AboutBackground from "../assets/images/about-background.jpeg";

function AboutPage() {
  return (
    <>
      <BannerImage img={AboutBackground} />
      <About />
    </>
  );
}
export default AboutPage;
