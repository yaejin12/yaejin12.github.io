import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { aboutMeText } from "./AboutMetText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowWidth from "../../../hooks/useWindowWidth";

function AboutMe({ styles }) {
  const refs = useRef([]);
  const { width, height } = useWindowWidth();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    let animation;

    // if (width >= 800) {
    refs.current.map((ref) => {
      animation = gsap.fromTo(
        ref,
        {
          opacity: 0.0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ref,
            start: "center 80%",
            end: "center 30%", // 요소가 화면의 20% 위치에 도달할 때 종료
            toggleActions: "play none reverse reverse",
            onLeave: () =>
              gsap.to(ref, {
                opacity: 0,
              }), // 스크롤이 끝난 뒤 opacity를 0.1으로
          },
        }
      );
    });
    // }

    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [width, height]);

  return (
    <section className={styles.aboutMeSection}>
      {/* About Me */}
      {aboutMeText.map((text, i) => {
        return (
          <div
            className={styles.aboutMeWrapper}
            key={i}
            style={{ height: `${height}px` }}
          >
            <div className={`${styles.h1Title}`}>
              <p ref={(el) => (refs.current[i] = el)}>{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AboutMe;
