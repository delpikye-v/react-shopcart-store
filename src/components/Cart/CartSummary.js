import React from "react";
import { ProductConsumer } from "../../context/product";

function CartSummary() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { updateCart, cartSubtotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={updateCart}
                >
                  clear cart
                </button>
                <h6>subtotal: ${cartSubtotal}</h6>
                <h6>tax: ${cartTax}</h6>
                <h6>total: ${cartTotal}</h6>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
export default CartSummary;
