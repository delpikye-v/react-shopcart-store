import React, { useState } from "react";
import styled from "styled-components";
import useEventBus from "../../../hooks/useEventBus";

import LinkButton from "../../Common/LinkButton";
import { ProductConsumer } from "../../../context/product";

const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 2px solid var(--primaryColor);
  transition: var(--layoutTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
    display: flex;
    gap: 16px;
  }
`;

function SideCart() {
  const [showCart, setShowCart] = useState(false);
  useEventBus("toggleCart", (value) =>
    setShowCart(Boolean(value) || !showCart)
  );

  return (
    <ProductConsumer>
      {(value) => {
        const { cart, cartTotal } = value;
        return (
          <CartWrapper show={showCart} onClick={() => setShowCart(false)}>
            <ul>
              {cart.map((item, index) => {
                return (
                  <li key={index} className="cart-item mb-4">
                    <div>
                      <img
                        width="40"
                        src={`../${item.image}`}
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-tile text-capitalize">
                        amount: <b>{item.count}</b>
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total: <b>${cartTotal}</b>
            </h4>
            <div className="text-center my-5">
              <LinkButton to="/cart">Checkout</LinkButton>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

export default SideCart;
