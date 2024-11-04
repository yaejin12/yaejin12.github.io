import React from "react";
import MenuNav from "./components/MenuNav";
import { useSelector } from "react-redux";

function Header({ styles }) {
  // Redux에서 isBlackRef 상태를 가져옴
  const isRef = useSelector((state) => state.isBlackRef.isBlackRef);

  return (
    <header>
      <MenuNav styles={styles} isRef={isRef} />
    </header>
  );
}

export default Header;
