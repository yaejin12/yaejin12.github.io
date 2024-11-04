import React, { useEffect, useRef, useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowWidth from "../../../hooks/useWindowWidth";

function DetailSkills({ styles }) {
  const location = useLocation();
  const skillSectionRef = useRef();
  const skillUlRef = useRef();

  // 반응형 상태관리

  const width = useWindowWidth();

  const meetingSkills = useSelector((state) => {
    if (location.pathname === "/1") {
      return state.projectSkills.meetingSkills;
    } else if (location.pathname === "/2") {
      return state.projectSkills.healingPageSkills;
    } else {
      return null;
    }
  });

  //  // skill 애니메이션
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let animation;
    console.log(width);

    if (width >= 1080) {
      animation = gsap.to(skillUlRef.current, {
        xPercent: -130,
        ease: "none",
        scrollTrigger: {
          trigger: skillSectionRef.current,
          pin: false,
          scrub: 1,
          start: "center center",
          end: "10%",
        },
      });
    } else if (animation) {
      animation.scrollTrigger.kill();
      animation.kill();
    }

    return () => {
      if (animation) {
        animation.scrollTrigger.kill();
        animation.kill();
      }
    };
  }, [width]);

  return (
    <section className={styles.mySkillSection} ref={skillSectionRef}>
      <SkillBox skills={meetingSkills} ref={skillUlRef} size={"small"} />
    </section>
  );
}

export default DetailSkills;
