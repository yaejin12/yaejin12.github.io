import React from "react";
import styles from "./DetailBtn.module.scss";
import { NavLink } from "react-router-dom";

function DetailBtn({ text, detailIcon, link }) {
  const isExternalLink = text === "상세보기";

  return isExternalLink ? (
    <NavLink to={link}>
      <button className={styles.detailBtn}>
        {text}
        {detailIcon && <img src={detailIcon}></img>}
      </button>
    </NavLink>
  ) : (
    <a href={link}>
      <button className={styles.detailBtn}>
        {text}
        {detailIcon && <img src={detailIcon}></img>}
      </button>
    </a>
  );
}

export default DetailBtn;
