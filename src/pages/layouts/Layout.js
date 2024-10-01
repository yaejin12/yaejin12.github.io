import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./Header";
import SocialNav from "./SocialNav.js";
import ScrollTop from "./ScrollTop.js";

function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollTop />
      <Header styles={styles} />
      <SocialNav styles={styles} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
