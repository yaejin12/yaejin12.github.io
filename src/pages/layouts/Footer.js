import React from "react";
import logoGray from "../../assets/images/logo/logo_gray.svg";
import styles from "./Layout.module.scss";
function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.footerInfo}>
          <p>
            <span>Phone.</span>010. 5667. 8759
          </p>
          <p>
            <span>Email.</span>pos03167@naver.com
          </p>
          <p>
            <span>Address.</span>서울시 마포구 공덕동
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
