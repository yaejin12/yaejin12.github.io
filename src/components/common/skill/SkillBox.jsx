import React, { forwardRef } from "react";
import styles from "./SkillBox.module.scss";
import { v4 as uuidV4 } from "uuid";
// skills 더미 넘기기
// small : font size 25px
const SkillBox = forwardRef(({ skills, title, size }, ref) => {
  return (
    <div className={styles.mySkillWrapper}>
      {title && <div className={styles.title}>{title}</div>}
      {/* 각각의 skill */}
      <ul
        className={`${styles.skill} ${
          size === "small" ? styles.smallFontSize : ""
        }`}
        ref={ref}
      >
        {skills?.map((skillText, i) => {
          return (
            <li key={uuidV4()} className={styles.skillBox}>
              {skillText}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default SkillBox;
