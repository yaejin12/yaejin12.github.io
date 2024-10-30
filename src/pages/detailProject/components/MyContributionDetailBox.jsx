import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import {
  meetingMyContributionText,
  pageMyContributionText,
} from "./MyContributionDetailText";
import { useLocation } from "react-router-dom";

function MyContributionDetailBox({ styles }) {
  const location = useLocation();
  // 프로젝트텍스트 내용
  const [projectText, setProjectText] = useState([]);
  // more 클릭 했는지
  const [isMoreClick, setIsMoreClick] = useState([]);

  // 프로젝트 내용 불러오기
  useEffect(() => {
    if (location.pathname === "/1") {
      setProjectText(meetingMyContributionText);
      setIsMoreClick(meetingMyContributionText.map((text) => false));
    } else if (location.pathname === "/2") {
      setProjectText(pageMyContributionText);
      setIsMoreClick(pageMyContributionText.map((text) => false));
    }
  }, [location]);

  // Box클릭 이벤트
  const moreClickHandler = (index) => {
    setIsMoreClick((prev) =>
      prev.map((_, i) => (i === index ? !prev[index] : false))
    );
  };

  return (
    <>
      {projectText.map((text, i) => {
        return (
          <div
            className={`${styles.Box} ${isMoreClick[i] ? styles.open : ""}`}
            key={text.id}
            onClick={() => moreClickHandler(i)}
          >
            {/* 제목 wrapper */}
            <div className={styles.myContributionDetailTitleWrapper}>
              <div className={styles.title}>
                <p>{text.skill}</p>
                <p>{text.pageTitle}</p>
              </div>
              {/* 더보기 wrapper */}
              <div className={styles.detailMore}>
                <div className={styles.detailMoreLine}></div>
                <div className={styles.detailMoreLine}></div>
              </div>
            </div>
            {/* 상세 내용 */}
            <ul className={styles.detailTextWrapper}>
              {text.details.map((detailText, i) => {
                return (
                  <li key={i}>
                    <p className={styles.detailTextTitle}>
                 
                      {detailText.title}
                    </p>
                    <p className={styles.detailText}>
                      {detailText.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default MyContributionDetailBox;
