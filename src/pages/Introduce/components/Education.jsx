import React from "react";
import DetailText from "./DetailText";

function Education({ styles }) {
  const educationList = [
    {
      id: 1,
      title: "대구대학교",
      date: "2015. 3 - 2019. 2",
      info: "현대미술과",
    },
    {
      id: 2,
      title: "포항예술고등학교",
      date: "2012. 3 - 2015. 2",
      info: "서양화과",
    },
    {
      id: 3,
      title: "중앙정보처리학원",
      date: "2024. 2 - 2024. 8",
      info: "Front-end & Back-end",
    },
  ];

  return (
    <li className={styles.box}>
      <div className={styles.line}></div>
      <div className={styles.infoTitle}>Education</div>
      <div className={styles.detailInfoWrapper}>
        {/* 디테일 내용 */}
        {educationList.map((education) => (
          <DetailText
            key={education.id}
            styles={styles}
            title={education.title}
            date={education.date}
            info={education.info}
          />
        ))}
      </div>
    </li>
  );
}

export default Education;
