import React from "react";
import LinkButton from "../components/Common/LinkButton";
import BannerImage from "../components/Common/BannerImage";
import Home from "../components/Home";

function HomePage() {
  return (
    <>
      <BannerImage title="cheaper and better" max="true">
        <LinkButton to="/products">Our Products</LinkButton>
      </BannerImage>
      <Home />
    </>
  );
}
export default HomePage;
