import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../../context/product";

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--layoutTransition);
    height: 100%;

    .card-img-top {
      transition: var(--layoutTransition);
    }

    .card-body {
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    .product-icons {
      opacity: 1;
    }

    .card-img-top {
      transform: scale(1.15);
      opacity: 0.2;
    }
  }

  .image-navigation-container {
    position: relative;
  }

  .product-icons {
    transition: var(--layoutTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
`;

function ProductCart({ product }) {
  return (
    <ProductConsumer>
      {(value) => {
        const { addToCart, viewProductDetails } = value;
        return (
          <ProductWrapper className="col-12 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="image-navigation-container">
                <img
                  src={product.image}
                  className="card-img-top p-5"
                  alt="product"
                  style={{ height: "320px" }}
                />

                <div className="product-icons">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => viewProductDetails(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>

                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>

              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main text-danger">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

export default ProductCart;
