import React from "react";
import styled from "styled-components";
import { FlexCenter } from "react-flexbox-z";

import MainBackground from "../../assets/images/main-background.jpeg";

const BannerImageWrapper = styled(FlexCenter)`
  text-align: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

function BannerImage({ img = MainBackground, title, max, children }) {
  return (
    <BannerImageWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </BannerImageWrapper>
  );
}

export default BannerImage;
