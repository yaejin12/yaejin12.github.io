import React, { useEffect, useRef, useState } from "react";
// import charater from "../../../assets/images/logo/logo_charater_body.svg";
import charaterFull from "../../../assets/images/logo/logo_full.svg";
import charaterLine from "../../../assets/images/logo/logo_line.svg";
import gitArrow from "../../../assets/images/icons/arrow_git.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function MainBanner({ styles }) {
  // 캐릭터 바뀌는 시간 상태관리
  const [isFullImg, setIsFullImg] = useState(false);

  //캐릭터  바뀌는 시간 함수
  const changeImg = () => {
    setTimeout(() => {
      setIsFullImg(true);
    }, 2050);
  };

  // 캐릭터 바뀌는 시간 상태가 변경될때 마다 실행
  useEffect(() => {
    changeImg();
  }, [isFullImg]);

  // =====================
  // gsap 으로 타이틀 변경
  const titleRef = useRef([]);
  useGSAP(() => {
    gsap.fromTo(
      titleRef.current[0],
      {
        opacity: 0,
        x: -50,
        rotationX: -90,
      },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        duration: 0.7, // 애니메이션의 지속 시간 (초 단위)
        ease: "power2.out",
        delay: 0.2,
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current[1],
      {
        opacity: 0,
        x: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        duration: 0.7, // 애니메이션의 지속 시간 (초 단위)
        ease: "power2.out",
        delay: 0.7, // 애니메이션 시작 전 지연 시간 (초 단위)
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current[2],
      {
        opacity: 0,
        x: -50,
        rotationX: -90,
      },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        duration: 0.7, // 애니메이션의 지속 시간 (초 단위)
        ease: "power2.out",
        delay: 1.2, // 애니메이션 시작 전 지연 시간 (초 단위)
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current[3],
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // 애니메이션의 지속 시간 (초 단위)
        ease: "power2.out",
        delay: 2.05, // 애니메이션 시작 전 지연 시간 (초 단위)
      }
    );
  });

  // =====================

  return (
    <section>
      <div className={styles.mainBannerInner}>
        {/* 텍스트 부분 */}
        <div className={styles.mainBannerWrapper}>
          {/* 첫줄 */}
          <div className={styles.text} ref={(el) => (titleRef.current[0] = el)}>
            <p>Lee</p>
            <p>yae</p>
            <p>jin</p>
          </div>
          <div className={styles.text} ref={(el) => (titleRef.current[1] = el)}>
            Frontend
          </div>
          <div className={styles.text} ref={(el) => (titleRef.current[2] = el)}>
            Portfolio
          </div>

          {/* 깃 바로가기 */}
          <div className={styles.git} ref={(el) => (titleRef.current[3] = el)}>
            <a href="https://github.com/yaejin12">
              <p>MY GIT HUB</p>
              <img src={gitArrow} />
            </a>
          </div>
        </div>
        {/* 캐릭터 */}
        <div className={`${styles.charaterImages} ${styles.isView}`}>
          <img src={charaterLine} />
          <img src={charaterFull} className={isFullImg ? styles.isView : ""} />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
