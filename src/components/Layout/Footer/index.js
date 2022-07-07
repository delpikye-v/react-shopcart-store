import React from "react";
import styled from "styled-components";
import { socialData } from "../../../assets/social-data";

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--layoutTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">&copy; 2019</p>
          </div>

          <div className="col-md-6 d-flex justify-content-around">
            {socialData.map((item, index) => (
              <a key={index} href={item.url}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
