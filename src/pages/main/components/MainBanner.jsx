import React, { useEffect, useRef, useState } from "react";
import mainImg from "../../../assets/images/img/main_G.png";
import pathImg from "../../../assets/images/img/path_B.png";
import gitImg from "../../../assets/images/icons/arrow_git.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function MainBanner({ styles, isLoading }) {
  const [formattedDate, setFormattedDate] = useState();

  // =====================
  // gsap 으로 타이틀 변경
  const ref = useRef([{ dateRef: null, textBottomRef: null, imgRef: null }]);

  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "sine.inOut" },
      });

      tl.fromTo(
        ref.current.imgRef,
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1 }
      ).fromTo(
        [ref.current.dateRef, ref.current.textBottomRef],
        {
          y: 50,
          opacity: 0,
        },
        { y: 0, opacity: 1 }
      );
    }
  }, [isLoading]);

  // =====================
  // 년도 불러오기
  const CustomDate = () => {
    const today = new Date();
    setFormattedDate(`${today.getFullYear()} `);
  };

  useEffect(() => {
    CustomDate();
  }, []);

  return (
    <section>
      <div className={styles.mainBannerSection}>
        <div className={styles.mainBannerInner}>
          {/* 년도 */}
          <p ref={(el) => (ref.current.dateRef = el)}>{formattedDate}</p>
          {/* 이미지 */}
          <div
            className={styles.mainBannerWrapper}
            ref={(el) => (ref.current.imgRef = el)}
          >
            <img src={mainImg} alt="" className={styles.jinMainImg} />
            <img src={pathImg} alt="" className={styles.pathImgLeft} />
            <img src={pathImg} alt="" className={styles.pathImgRight} />
          </div>
          {/* 하단 내용 */}
          <div
            className={styles.mainBannerBottomWrapper}
            ref={(el) => (ref.current.textBottomRef = el)}
          >
            <p>
              010.5667.8758
              <br />
              eyj5202@naver.com
            </p>
            <div className={styles.scroll}>
            <span></span>
            </div>
            <a href="https://github.com/yaejin12" alt="yaejin Git Hub">
              <p>
                My Git Hub <img src={gitImg} alt="arrow" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
