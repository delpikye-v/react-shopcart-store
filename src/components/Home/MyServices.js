import React, { Component } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

import styled from "styled-components";

const ServicesWrapper = styled.section`
  background: rgba(0, 0, 0, 0.1);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
`;

const services = [
  {
    id: 1,
    icon: <FaDolly />,
    title: "free shipping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    icon: <FaRedo />,
    title: "30 days return policy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    icon: <FaDollarSign />,
    title: "secured payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function MyServices() {
  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        <div className="row">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
              >
                <div className="service-icon">{item.icon}</div>
                <div className="mt-3 text-capitalize">
                  <b>{item.title}</b>
                </div>
                <div className="mt-3">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </ServicesWrapper>
  );
}

export default MyServices;
