import React from "react";
import SkillProgram from "./SkillProgram";

function DetailHeaderTitle({ styles, project }) {
  return (
    <>
      {/* 상단 제목 */}
      <div className={styles.h1ProjectTitle}>
        {project.title}
        {project.titleBr && <>{project.titleBr}</>}
      </div>
      {/* subTitle wrapper */}
      <li className={styles.projectDetailBox}>
        {/* 왼쪽 */}
        <div className={styles.leftWrapper}>
          {/* sub 타이틀 */}
          <div className={styles.subTitle}>
            {project.info}
            <br />
            {project.infoBr}
          </div>
          {/* 팀명 날짜 */}
          <div className={styles.subDetail}>
            <p className={styles.h2InfoTitle}>
              <span>일정</span> {project.date}
            </p>
            <p className={styles.h2InfoTitle}>
              <span>팀명</span> {project.team}
            </p>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className={styles.rightWrapper}>
          {project.overview.map((value, i) => (
            <p className={styles.rightInfo} key={i}>
              {value}
            </p>
          ))}
        </div>
      </li>
    </>
  );
}

export default DetailHeaderTitle;
