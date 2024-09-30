import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import MainTitle from "./components/MainTitle";
import Info from "./components/Info";
import GradationBg from "../../components/common/gradationBg/GradationBg";

function Main() {
  return (
    <GradationBg>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.mainWrapper}>
            <MainTitle styles={styles} />
            <Info styles={styles} />
          </div>
        </div>
      </div>
    </GradationBg>
  );
}

export default Main;
