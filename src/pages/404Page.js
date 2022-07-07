import React from "react";

import BannerImage from "../components/Common/BannerImage";
import LinkButton from "../components/Common/LinkButton";
import DefaultBackground from "../assets/images/default-background.jpeg";

function Default() {
  return (
    <BannerImage img={DefaultBackground} title="404" max="true">
      <h2 className="text-uppercase">page not found</h2>
      <LinkButton to="/">return home</LinkButton>
    </BannerImage>
  );
}

export default Default;
