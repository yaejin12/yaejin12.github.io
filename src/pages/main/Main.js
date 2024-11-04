import React, { useEffect, useState } from "react";
import MainBanner from "./components/MainBanner";
import mainStyles from "./Main.module.scss";
import aboutMeStyles from "./AboutMe.module.scss";
import AboutMe from "./components/AboutMe";
import MySkill from "./components/MySkill";

import { useDispatch } from "react-redux";
import { toggleBlackRef } from "../../store/Toggle-slice";
import { useInView } from "react-intersection-observer";
import { Outlet, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";

function Main() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState({ loading: true, mainAni: false });
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
      {isLoading.loading ? <LoadingPage setIsLoading={setIsLoading} /> : ""}
      {isRootPath && (
        <>
          <MainBanner styles={mainStyles} isLoading={isLoading.mainAni} />
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
