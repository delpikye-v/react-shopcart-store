import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

import styled from "styled-components";

const CartWrapper = styled.div`
  .cart-icon:hover {
    cursor: pointer;
  }
`;

function CartItem({ cartItem, increment, decrement, removeItem }) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <CartWrapper>
      <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <img src={image} width="60" className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-lg-2 pb-2">{title}</div>
        <div className="col-10 mx-auto col-lg-2 pb-2">${price}</div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <FaChevronCircleDown
                className="cart-icon text-primary"
                onClick={() => decrement(id)}
              />
              <span className="text-title text-muted mx-3">{count}</span>
              <FaChevronCircleUp
                className="cart-icon text-primary"
                onClick={() => increment(id)}
              />
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <FaTrash
            className="text-danger cart-icon"
            onClick={() => removeItem(id)}
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-muted">${total}</strong>
        </div>
      </div>
    </CartWrapper>
  );
}

export default CartItem;
