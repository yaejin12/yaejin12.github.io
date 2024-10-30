import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBlackRef, toggleCloseMenu } from "../../../store/Toggle-slice";
import { useLocation } from "react-router-dom";

function MenuNav({ styles, isRef }) {
  // 메뉴의 열림/닫힘 상태를 관리하는 로컬 상태 (초기값 false)
  const isClose = useSelector((state) => state.isCloseMenu.isCloseMenu);
  const dispatch = useDispatch();
  const location = useLocation();

  // 메뉴 버튼 클릭 시 상태를 변경하고, Redux 액션을 디스패치하는 함수
  const closeClickHandler = () => {
    dispatch(toggleCloseMenu(!isClose));
  };

  // isClose 상태가 변경될 때마다 body에 클래스 추가/제거
  useEffect(() => {
    if (isClose) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }
    return () => {
      document.body.classList.remove("body-lock"); // 컴포넌트 언마운트 시 제거
    };
  }, [isClose]);

  return (
    <>
      <div
        className={`${styles.menuWrapper} ${isClose ? styles.close : ""}`}
        onClick={closeClickHandler}
      >
        <div
          style={{ backgroundColor: isRef ? "#fff" : "" }}
          className={styles.menuLine}
        />
        <div
          style={{ backgroundColor: isRef ? "#fff" : "" }}
          className={styles.menuLine}
        />
      </div>
    </>
  );
}

export default MenuNav;
