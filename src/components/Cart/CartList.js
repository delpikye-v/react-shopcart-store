import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context/product";

function CartList() {
  return (
    <>
      <div className="container-fluid text-center d-none d-lg-block my-4 text-uppercase">
        <div className="row">
          <div className="col-lg-2">
            <p>products</p>
          </div>
          <div className="col-lg-2">
            <p>name</p>
          </div>
          <div className="col-lg-2">
            <p>price</p>
          </div>
          <div className="col-lg-2">
            <p>quantity</p>
          </div>
          <div className="col-lg-2">
            <p>remove</p>
          </div>
          <div className="col-lg-2">
            <p>total</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ProductConsumer>
              {(value) => {
                const { cart, increment, decrement, removeItem } = value;
                if (cart.length === 0) {
                  return (
                    <h3 className="text-title text-center my-4">
                      There is no items
                    </h3>
                  );
                }
                return (
                  <>
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                      />
                    ))}
                  </>
                );
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
