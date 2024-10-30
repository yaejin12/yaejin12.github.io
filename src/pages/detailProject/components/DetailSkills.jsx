import React, { useEffect, useRef, useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowWidth from "../../../assets/hooks/useWindowWidth";

function DetailSkills({ styles }) {
  const location = useLocation();
  const skillSectionRef = useRef();
  const skillUlRef = useRef();

  // 반응형 상태관리
  const [xPercentValue, setXPercentValue] = useState(-180);
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

  useEffect(() => {
    if (width < 800) {
      setXPercentValue(-500);
    } else {
      setXPercentValue(-180);
    }
  }, [width, xPercentValue]);

  //  // kill 애니메이션
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(skillUlRef.current, {
      xPercent: xPercentValue,
      ease: "none",
      scrollTrigger: {
        trigger: skillSectionRef.current,
        pin: false,
        scrub: 1,
        start: "top center",
        end: "10%",
      },
    });
  }, [width]);

  return (
    <section className={styles.mySkillSection} ref={skillSectionRef}>
      <SkillBox skills={meetingSkills} ref={skillUlRef} size={"small"} />
    </section>
  );
}

export default DetailSkills;
