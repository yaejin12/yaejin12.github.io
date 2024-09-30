import React from "react";
import DetailText from "./DetailText";

function Experience({ styles }) {
  const experienceList = [
    {
      id: 1,
      title: "정디자인",
      date: "2021. 8 - 2023.12",
      info: "디자인 팀 / 대리",
    },
    {
      id: 2,
      title: "가온상패공장",
      date: "2019. 6 - 2020. 9",
      info: "디자인 / 사원",
    },
    {
      id: 3,
      title: "TONGART",
      date: "2017. 5 - 2018. 12",
      info: "드로잉 전문강사",
    },
  ];
  return (
    <li className={styles.box}>
      <div className={styles.line}></div>
      <div className={styles.infoTitle}>Experience</div>

      <div className={styles.detailInfoWrapper}>
        {/* 디테일 내용 */}
        {experienceList.map((experience) => (
          <DetailText
            key={experience.id}
            styles={styles}
            title={experience.title}
            date={experience.date}
            info={experience.info}
          />
        ))}
      </div>
    </li>
  );
}

export default Experience;
