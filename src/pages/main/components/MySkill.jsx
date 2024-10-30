import React, { useEffect, useRef, useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useWindowWidth from "../../../assets/hooks/useWindowWidth";

function MySkill({ styles }) {
  const skillSectionRef = useRef();
  const skillUlRef = useRef();
  const [xPercentValue, setXPercentValue] = useState(-180);
  const width = useWindowWidth();

  useEffect(() => {
    if (width < 800) {
      setXPercentValue(-500);
    } else {
      setXPercentValue(-180);
    }
  }, [width, xPercentValue]);

  // kill 애니메이션
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(skillUlRef.current, {
      xPercent: xPercentValue,
      ease: "none",
      scrollTrigger: {
        trigger: skillSectionRef.current,
        pin: true,
        scrub: 1,
        start: "center center",
        end: "300%",
      },
    });
  });

  const mySkills = useSelector((state) => state.projectSkills.mySkills);
  return (
    <section className={styles.mySkillSection} ref={skillSectionRef}>
      <SkillBox skills={mySkills} title={"Skills"} ref={skillUlRef} />
    </section>
  );
}

export default MySkill;
