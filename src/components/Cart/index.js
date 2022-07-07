import React from "react";
import Title from "../Common/LabelTitle";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center />
      </div>
      <CartList />
      <CartSummary />
    </section>
  );
}

export default Cart;
