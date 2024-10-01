import React from "react";
import styles from "./DetailTemplate.module.scss";
import SkillProgram from "../../../pages/detailProject/components/SkillProgram";

function DetailTemplate({ title, children }) {
  // let layoutCss;
  // if (layout === "work") {
  //   layoutCss = styles.work;
  // } else {
  //   layoutCss = "";
  // }

  return (
    <li className={`${styles.projectDetailBox}`}>
      <div className={styles.titleWrapper}>
        {/* 왼쪽 wrapper */}
        <div className={styles.title}>{title}</div>
      </div>
      {/* 오른쪽 wrapper */}
      <div className={styles.infoWrapper}>{children}</div>
    </li>
  );
}

export default DetailTemplate;
