import React from "react";
import Cart from "../components/Cart";
import BannerImage from "../components/Common/BannerImage";
import CartBackground from "../assets/images/store-background.jpeg";

function CartPage() {
  return (
    <>
      <BannerImage img={CartBackground} />
      <Cart />
    </>
  );
}

export default CartPage;
