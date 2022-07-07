import React from "react";
import BannerImage from "../components/Common/BannerImage";
import LinkButton from "../components/Common/LinkButton";
import { ProductConsumer } from "../context/product";

import ProductDetailsBackground from "../assets/images/product-details-background.jpeg";

function ProductDetailsPage() {
  return (
    <>
      <BannerImage img={ProductDetailsBackground} title="Product detail" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return <h1>Loading...</h1>;
          }

          const { company, description, id, price, title, image } =
            singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      alt="product detail"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model: {title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company: {company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4 text-danger">
                      price: <b>${price}</b>
                    </h5>
                    <h5 className="text-capitalize text-title mt-3">info</h5>
                    <p>{description}</p>

                    <div className="nav-cart-product">
                      <LinkButton onClick={() => addToCart(id)}>
                        add to cart
                      </LinkButton>

                      <LinkButton to="/products">back ro products</LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}

export default ProductDetailsPage;
