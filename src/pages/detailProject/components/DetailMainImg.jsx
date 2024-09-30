import React from "react";

function DetailMainImg({ styles, project }) {
  return (
    <li className={styles.projectDetailBox}>
      {/* 메인 이미지 */}
      <img src={project.img}></img>
    </li>
  );
}

export default DetailMainImg;
