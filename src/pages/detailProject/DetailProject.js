import React, { useEffect } from "react";
import DetailTop from "./components/DetailTop";
import stylesTop from "./DetailProject.module.scss";
import MyContribution from "./components/MyContribution";
import DetailStyles from "./DetailProject.module.scss";
import DetailSkills from "./components/DetailSkills";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { toggleBlackRef } from "../../store/Toggle-slice";
import { useLocation } from "react-router-dom";
function DetailProject() {
  const isRef = useSelector((state) => state.isBlackRef.isBlackRef);
  const [isViewRef, inView] = useInView({
    threshold: 0.6,
  });

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/1" || location.pathname === "/2") {
      dispatch(toggleBlackRef(true));

      if (inView) {
        dispatch(toggleBlackRef(!inView));
      }
    }
  }, [inView, location, isRef]);

  return (
    <>
      <DetailTop styles={stylesTop} />
      <DetailSkills styles={DetailStyles} />
      <div ref={isViewRef}>
        <MyContribution styles={DetailStyles} />
      </div>
    </>
  );
}

export default DetailProject;
