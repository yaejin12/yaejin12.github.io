import React from "react";

function ProjectWorkDetail({ styles, project }) {
  const text = project.text;

  return (
    <div className={`${styles.info} ${styles.work} `}>
      {/* 설명1 */}
      {/* 왼쪽 */}
      <div className={styles.pageWrapper}>
        {/* 페이지 */}
        <p className={styles.listName}>{project.workPage}</p>
        {/* 스킬 */}
        <p className={styles.DetailWorkSkill}>{project.workSkill}</p>
      </div>
      <div className={styles.infoDetailText}>
        {/* //  오른쪽 디테일 내용 */}
        {text.map((text, i) => {
          return (
            // key 를 작성하려면 <React.Fragment>를 적어야함 <></> 로는 키 값 부여 못한다
            <React.Fragment key={i}>
              <div className={styles.detailWork}>{text.title}</div>

              {/* 기능 상세 정보 */}
              {text.detail.map((detail, Index) => {
                return (
                  <div
                    key={`${i}-${Index}`}
                    className={styles.detailWorkSubText}
                  >
                    {detail}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectWorkDetail;
