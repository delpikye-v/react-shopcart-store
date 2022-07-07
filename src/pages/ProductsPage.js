import React from "react";
import Products from "../components/Products";
import BannerImage from "../components/Common/BannerImage";
import ProductsBackground from "../assets/images/products-background.jpeg";

function ProductsPage() {
  return (
    <>
      <BannerImage img={ProductsBackground} />
      <Products />
    </>
  );
}

export default ProductsPage;
