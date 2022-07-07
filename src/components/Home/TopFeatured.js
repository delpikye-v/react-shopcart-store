import React from "react";
import LinkButton from "../Common/LinkButton";
import Title from "../Common/LabelTitle";

import { ProductConsumer } from "../../context/product";
import ProductCard from "../Products/ProductCard";

function TopFeatured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Top rating" center="true" />
        <div className="row">
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;
              return featuredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <LinkButton to="/products">View list</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopFeatured;
