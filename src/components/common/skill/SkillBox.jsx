import React, { forwardRef, useState } from "react";
import styles from "./SkillBox.module.scss";
import { v4 as uuidV4 } from "uuid";

// skills 더미 넘기기
// small : font size 25px
const SkillBox = forwardRef(({ skills, title, size }, ref) => {
  const [animate, setAnimate] = useState(true);

  const onMouseEnterHandler = () => {
    setAnimate(false);
  };

  const onMouseLeaveHandler = () => {
    setAnimate(true);
  };

  return (
    <div className={styles.mySkillWrapper}>
      {/* title */}
      {title && <div className={styles.title}>{title}</div>}
      {/* 각각의 skill */}
      <ul
        className={`${styles.skill} ${
          size === "small" ? styles.smallFontSize : ""
        }`}
        ref={ref}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div
          className={`${styles.slide} ${styles.original} ${
            animate ? "" : styles.stop
          }`}
        >
          {skills?.map((skillText, i) => (
            <li key={i} className={styles.item}>
              <p>{skillText}</p>
            </li>
          ))}
        </div>
        <div
          className={`${styles.slide} ${styles.clone} ${
            animate ? "" : styles.stop
          }`}
        >
          {skills?.map((skillText, i) => (
            <li key={i + skills.length} className={styles.item}>
              <p>{skillText}</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
});

export default SkillBox;
