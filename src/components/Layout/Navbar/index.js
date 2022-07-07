import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import EventBus from "event-bus-e2z";

import { CmUtils } from "@delpi/common";

import { ProductConsumer } from "../../../context/product";
import NavMenu from "./NavMenu";
import Logo from "../../../assets/images/Logo";

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  z-index: 999;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);

  /* .title {
    color: var(--primaryColor);
    font-weight: bold;
  } */
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;

    ul.nav-menubar {
      display: flex;
      flex-direction: "row";
      margin: 0;
    }
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;
  }
  .nav-cart {
    position: relative;
  }

  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

function NavBar() {
  const isMobile = CmUtils.isMobile();

  if (isMobile) {
    return (
      <ProductConsumer>
        {({ cartItemCounter }) => {
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars
                  className="nav-sidebar nav-icon"
                  onClick={() => EventBus.$emit("showMenuBar")}
                />
                <Logo />
                <div className="nav-cart">
                  <FaCartPlus
                    className="nav-icon"
                    onClick={() => EventBus.$emit("toggleCart")}
                  />
                  <div className="cart-items">{cartItemCounter}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }

  return (
    <NavWrapper>
      <div className="nav-center">
        <Logo />

        <NavMenu className="nav-menubar" />
      </div>
    </NavWrapper>
  );
}

export default NavBar;
