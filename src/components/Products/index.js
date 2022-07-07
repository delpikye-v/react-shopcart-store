import React from "react";
import Title from "../Common/LabelTitle";
import Product from "./ProductCard";
import ProductSearchbar from "./ProductSearchbar";
import { ProductConsumer } from "../../context/product";

function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />

              <ProductSearchbar />

              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products: {filteredProducts.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry, no items matched your search
                  </div>
                ) : (
                  filteredProducts.map((product, index) => {
                    return <Product key={index} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}

export default Products;
