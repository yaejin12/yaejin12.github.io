import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { aboutMeText } from "./AboutMetText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidV4 } from "uuid";

function AboutMe({ styles }) {
  const refs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    refs.current.map((ref) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0.0,
          yPercent: 50, // 아래에서 시작
        },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: ref,
            yPercent: 0,
            start: "center 80%",
            end: "center 30%", // 요소가 화면의 20% 위치에 도달할 때 종료
            scrub: true,
            // pin: true,
            onLeave: () =>
              gsap.to(ref, {
                opacity: 0.0,
                yPercent: -50,
              }), // 스크롤이 끝난 뒤 opacity를 0.1으로
            onEnterBack: () => gsap.to(ref, { opacity: 1, yPercent: 0 }), // 스크롤이 올라갈 때 opacity 증가
            onLeaveBack: () => gsap.to(ref, { opacity: 0.0, yPercent: 50 }), // 스크롤이 위로 지나갈 때 opacity 감소
          },
        }
      );
    });
  });

  return (
    <section className={styles.aboutMeSection}>
      {/* About Me */}
      {aboutMeText.map((text, i) => {
        return (
          <div className={styles.aboutMeWrapper} key={i}>
            <div className={styles.h1Title}>
              <p ref={(el) => (refs.current[i] = el)}>{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AboutMe;
