import React from "react";
import styles from "./SkillBox.module.scss";

function SkillBox({ text, Bk }) {
  return (
    <div className={`${styles.skillBox} ${Bk === "Bk" ? styles.Bk : ""}`}>
      {text}
    </div>
  );
}

export default SkillBox;
