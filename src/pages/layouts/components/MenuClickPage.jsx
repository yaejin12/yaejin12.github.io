import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleBlackRef, toggleCloseMenu } from "../../../store/Toggle-slice";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

function MenuClickPage({ styles }) {
  const location = useLocation();

  // Redux에서 메뉴가 열려 있는지 여부 확인
  const isCloseMenu = useSelector((state) => state.isCloseMenu.isCloseMenu);
  const dispatch = useDispatch();

  // useInView 훅을 사용하여 요소가 뷰포트에 들어왔는지 감지
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  // inView 상태가 변경될 때마다 Redux에서 toggleBlackRef 액션 디스패치
  useEffect(() => {
    dispatch(toggleBlackRef(inView));
  }, [inView]);

  // location가 변경될때마다 Redux에서  close 액션 디스패치
  useEffect(() => {
    dispatch(toggleCloseMenu(false));
  }, [location]);

  return (
    <>
      <div
        className={`${styles.menuClickWrapper} ${
          isCloseMenu ? styles.open : ""
        }`}
        ref={ref}
      >
        <div className={styles.gnb}>
          <NavLink to={"/"}>
            <p>홈</p>
          </NavLink>
          <NavLink to={"/1"}>
            <p>과팅 웹 앱</p>
          </NavLink>
          <NavLink to={"/2"}>
            <p>나의 애착페이지 웹</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MenuClickPage;
