import React, { useEffect, useRef } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowWidth from "../../../hooks/useWindowWidth";

function MySkill({ styles }) {
  const skillSectionRef = useRef();
  const skillUlRef = useRef();
  const width = useWindowWidth();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let animation;
    // width가 1080 일때만 gsap 적용
    if (width >= 1080) {
      animation = gsap.to(skillUlRef.current, {
        xPercent: -180,
        ease: "none",
        scrollTrigger: {
          trigger: skillSectionRef.current,
          pin: true,
          scrub: 1,
          start: "center center",
          end: "300%",
        },
      });
    }
    // kill 애니메이션
    else if (animation) {
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

  const mySkills = useSelector((state) => state.projectSkills.mySkills);

  return (
    <section className={styles.mySkillSection} ref={skillSectionRef}>
      <SkillBox skills={mySkills} title={"Skills"} ref={skillUlRef} />
    </section>
  );
}

export default MySkill;
