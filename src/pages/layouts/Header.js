import React from "react";
import MenuNav from "./components/MenuNav";

function Header({ styles }) {
  return (
    <header>
      <MenuNav styles={styles} />
    </header>
  );
}

export default Header;
