import React, { useEffect, useRef } from "react";
import styles from "./LoadingPage.module.scss";
import yae from "../../../assets/images/img/name_yae.png";
import jin from "../../../assets/images/img/name_jin.png";
import portfolio from "../../../assets/images/img/main_.png";
import gsap from "gsap";

function LoadingPage({ setIsLoading }) {
  const Ref = useRef({
    loadingRef: null,
    yaeRef: null,
    jinRef: null,
    portfolio: null,
  });

  useEffect(() => {
    const tl = gsap.timeline({
      // 초기 셋팅
      defaults: { duration: 0.7, ease: "power3.out" },
    });

    tl.fromTo(
      Ref.current.yaeRef,
      { y: 200, opacity: 0 }, // 초기 위치와 불투명도
      { y: 0, opacity: 1 } // 떠오른 후 위치와 불투명도
    )
      .fromTo(
        Ref.current.jinRef,
        { y: 200, opacity: 0 }, // 위에서 시작
        { y: 0, opacity: 1 } // 화면 가운데 위치로 이동
      )
      .fromTo(
        Ref.current.portfolioRef,
        { y: 200, opacity: 0 }, // 초기 위치와 불투명도
        { y: 0, opacity: 1 } // 떠오른 후 위치와 불투명도
      )
      .to([Ref.current.yaeRef, Ref.current.jinRef, Ref.current.portfolioRef], {
        y: "+=20", // 위아래로 움직일 범위
        repeat: 3, // 약 2초 동안 반복
        yoyo: true, // 위로 올라갔다가 다시 내려옵니다.
        ease: "sine.inOut", // 자연스러운 움직임을 위한 이징
        duration: 0.8, // 둥둥 효과의 지속 시간
        delay: 0.1, // 떠다니기 시작 전에 0.5초 딜레이
        onComplete: () => setIsLoading((prev) => ({ ...prev, mainAni: true })),
      })
      .to(Ref.current.loadingRef, {
        yPercent: -100,
        onComplete: () => setIsLoading((prev) => ({ ...prev, loading: false })),
      });
  }, []);

  return (
    <div
      className={styles.loadingPageSection}
      ref={(el) => (Ref.current.loadingRef = el)}
    >
      <div className={styles.loadingImgWrapper}>
        <div className={styles.nameImgWrapper}>
          <img
            src={yae}
            alt="yae"
            className={styles.yae}
            ref={(el) => (Ref.current.yaeRef = el)}
          />
          <img
            src={jin}
            alt="jin"
            className={styles.jin}
            ref={(el) => (Ref.current.jinRef = el)}
          />
        </div>
        <img
          src={portfolio}
          alt=""
          className={styles.portfolio}
          ref={(el) => (Ref.current.portfolioRef = el)}
        />
      </div>
    </div>
  );
}

export default LoadingPage;
