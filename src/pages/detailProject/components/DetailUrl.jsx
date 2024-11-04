import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailUrl({ styles }) {
  //  ================
  const location = useLocation();

  // 프로젝트 Git URL 불러오기
  const projectUrl = useSelector((state) => {
    if (location.pathname === "/1") {
      return state.myContribution.meetingUrl;
    } else if (location.pathname === "/2") {
      return state.myContribution.healingPageUrl;
    } else {
      return null;
    }
  });

  // URL 이름 리턴
  const urlName = (url) => {
    if (url.includes("github")) {
      return (
        <>
          GIT <br /> HUB
        </>
      );
    } else if (url.includes("canva")) {
      return <>상세보기</>;
    } else if (url.includes("notion")) {
      return <>Notion</>;
    } else {
      return null;
    }
  };
  return (
    <>
      {/* 링크 연결 */}
      <div className={styles.urlWrapper}>
        {projectUrl &&
          projectUrl.map((url) => {
            return url.url.map((urlDetail, i) => {
              return (
                <a key={i} href={urlDetail}>
                  <div className={styles.url}>{urlName(urlDetail)}</div>
                </a>
              );
            });
          })}
      </div>
    </>
  );
}

export default DetailUrl;
