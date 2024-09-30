import React from "react";

function DetailHeaderTitle({ styles, project }) {
  return (
    <li className={styles.projectDetailBox}>
      {/* 왼쪽 wrapper*/}
      <div className={styles.titleWrapper}>
        {/* 왼쪽 상단 */}
        <div className={styles.h1ProjectTitle}>
          {project.title}
          {project.titleBr && (
            <>
              <br />
              {project.titleBr}
            </>
          )}
        </div>
        {/* 왼쪽 하단 */}
        <div>
          <div className={styles.h2Info}>
            <div className={styles.h2InfoTitle}>개발 일정</div>
            <div>{project.date}</div>
          </div>
          <div className={styles.h2Info}>
            <div className={styles.h2InfoTitle}>팀 명</div>
            <div>{project.team}</div>
          </div>
        </div>
      </div>
      {/* 오른쪽 wrapper*/}
      <div className={styles.infoDetail}>
        {/* 오른쪽 상단 wrapper*/}
        <div className={styles.projectInfoTopWrapper}>
          <div className={styles.infoDetail}>
            <p>
              {project.info}
              <br />
              {project.infoBr}
            </p>
          </div>
        </div>

        {/* 오른쪽 하단 wrapper*/}
        <div className={styles.projectInfoBottomWrapper}>
          {project.overview.map((value, i) => (
            <p key={i}>{value} </p>
          ))}
        </div>
      </div>
    </li>
  );
}

export default DetailHeaderTitle;
