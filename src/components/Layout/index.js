import React from "react";

import NavBar from "./Navbar";
import MobileNavMenu from "./Navbar/MobileNavMenu";
import SideCart from "./Navbar/SideCart";

import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <SideCart />
      <MobileNavMenu />
      <div className="page-container">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
