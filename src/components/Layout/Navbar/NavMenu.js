import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { linkMenu } from "../../../routers";

const NavMenuWrap = styled.ul`
  list-style-type: none;
  padding: 0 !important;

  .nav-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--layoutTransition);
    a {
      display: block;
    }
  }

  .nav-link:hover {
    color: var(--mainWhite);
    text-decoration: none;
  }

  &.nav-mobile-menubar {
    .nav-link {
      line-height: 40px;
    }
    .nav-link:hover {
      background: var(--primaryColor);
      color: var(--mainWhite);
      padding: 0.5rem 1.5rem 0.5rem 2.5rem;
      text-decoration: none;
    }
  }
`;

function NavMenu({ className, setShowMenu = () => {} }) {
  return (
    <NavMenuWrap className={className}>
      {linkMenu().map((link, index) => {
        return (
          <li
            key={index}
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </NavMenuWrap>
  );
}

export default NavMenu;
