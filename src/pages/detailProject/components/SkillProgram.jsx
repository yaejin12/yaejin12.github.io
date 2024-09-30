import React, { useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import styles from "../DetailProject.module.scss";

function SkillProgram({ skillList }) {
  const detail = skillList.detail;

  return (
    <div className={styles.info}>
      <div className={styles.listName}>{skillList.name}</div>
      <div className={styles.infoDetailText}>
        {Object.keys(detail).map((key, i) => {
          return <SkillBox key={i} Bk={"Bk"} text={detail[key]} />;
        })}
      </div>
    </div>
  );
}

export default SkillProgram;
