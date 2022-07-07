// import React from "react";

import Home from "../pages";
import About from "../pages/AboutPage";
import Products from "../pages/ProductsPage";
import Contact from "../pages/ContactPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Cart from "../pages/CartPage";
import Default from "../pages/404Page";

const routerDatas = () => {
  return [
    {
      id: 1,
      text: "home",
      path: "/",
      component: Home,
    },
    {
      id: 2,
      text: "about",
      path: "/about",
      component: About,
    },
    {
      id: 3,
      text: "products",
      path: "/products",
      component: Products,
    },
    {
      id: 4,
      text: "contact",
      path: "/contact",
      component: Contact,
    },
    {
      id: 5,
      text: "cart",
      path: "/cart",
      component: Cart,
    },
    {
      id: 6,
      text: "singleProduct",
      path: "/products/:id",
      component: ProductDetailsPage,
      isLink: true,
    },
    {
      id: 7,
      text: "default",
      component: Default,
      isLink: true,
    },
  ];
};

export const linkMenu = () => routerDatas().filter((item) => !item.isLink);

export { routerDatas };
export default routerDatas;
