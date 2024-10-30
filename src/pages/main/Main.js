import React, { useEffect } from "react";
import MainBanner from "./components/MainBanner";
import mainStyles from "./Main.module.scss";
import aboutMeStyles from "./AboutMe.module.scss";
import AboutMe from "./components/AboutMe";
import MySkill from "./components/MySkill";

import { useDispatch } from "react-redux";
import { toggleBlackRef } from "../../store/Toggle-slice";
import { useInView } from "react-intersection-observer";
import { Outlet, useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  const [ref, inView] = useInView({
    threshold: 0.09,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleBlackRef(inView));
  }, [inView]);

  return (
    <>
      {isRootPath && (
        <>
          <MainBanner styles={mainStyles} />
          <div style={{ height: "100%" }} ref={ref}>
            <AboutMe styles={aboutMeStyles} />
            <MySkill styles={aboutMeStyles} />
          </div>
        </>
      )}
      <Outlet />
    </>
  );
}

export default Main;
