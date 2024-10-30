import React from "react";
import MenuNav from "./components/MenuNav";
import { useSelector } from "react-redux";

function Header({ styles }) {
  // Redux에서 isBlackRef 상태를 가져옴
  const isRef = useSelector((state) => state.isBlackRef.isBlackRef);

  
  return (
    <header>
      <div className={styles.headerWrapper}>
        <MenuNav styles={styles} isRef={isRef} />
      </div>
    </header>
  );
}

export default Header;
