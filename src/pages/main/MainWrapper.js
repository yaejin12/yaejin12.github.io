import React from "react";
import MainTitle from "./components/MainTitle";
import Info from "./components/Info";

function MainWrapper({ styles }) {
  return (
    <div className={styles.inner}>
      <div className={styles.mainWrapper}>
        <MainTitle styles={styles} />
        <Info styles={styles} />
      </div>
    </div>
  );
}

export default MainWrapper;
