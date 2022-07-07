import React, { useRef, useState } from "react";
import styled from "styled-components";
import useEventBus from "../../../hooks/useEventBus";
import useOutsideClick from "../../../hooks/useOutsideClick";

import NavMenu from "./NavMenu";

const SideWrapper = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--layoutTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
`;

function MobileNavMenu() {
  const refsMenuBar = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEventBus("showMenuBar", () => {
    setShowMenu(!showMenu);
  });

  useOutsideClick(refsMenuBar, (evt) => {
    let target = evt.target.closest(".nav-sidebar");
    if (target) {
      return;
    }
    setShowMenu(false);
  });

  return (
    <SideWrapper ref={refsMenuBar} show={showMenu}>
      <NavMenu className="nav-mobile-menubar" setShowMenu={setShowMenu} />
    </SideWrapper>
  );
}

export default MobileNavMenu;
