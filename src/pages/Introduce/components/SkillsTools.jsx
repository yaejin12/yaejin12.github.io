import React from "react";
import SkillBox from "../../../components/common/skill/SkillBox";

function SkillsTools({ styles, Rendering }) {
  const frontDummy = [
    {
      id: 1,
      test: "HTML5",
    },
    {
      id: 2,
      test: "CSS3",
    },
    {
      id: 3,
      test: "SASS/SCSS",
    },
    {
      id: 4,
      test: "JavaScript",
    },
    {
      id: 5,
      test: "AJAX",
    },
    {
      id: 6,
      test: "JSP",
    },
    {
      id: 7,
      test: "ReactJS",
    },
  ];

  const backDummy = [
    {
      id: 1,
      test: "JAVA",
    },
    {
      id: 2,
      test: "SpringBoot",
    },
    {
      id: 3,
      test: "JPA",
    },
    {
      id: 4,
      test: "MyBatis",
    },
  ];

  const DevDummy = [
    {
      id: 1,
      test: "MySQL",
    },
    {
      id: 2,
      test: "MariaDB",
    },
    {
      id: 3,
      test: "AWS",
    },
  ];

  const ToolsDevDummy = [
    {
      id: 1,
      test: "GIT",
    },
    {
      id: 2,
      test: "GitHub",
    },
    {
      id: 3,
      test: "Figma",
    },
    {
      id: 4,
      test: "Discord",
    },
    ,
    {
      id: 5,
      test: "Notion",
    },
  ];

  return (
    <li className={styles.box}>
      <div className={styles.line}></div>
      <div className={styles.infoTitle}>Skills</div>

      {/* 디테일 내용 */}
      <div className={styles.detailInfoWrapper}>
        <div className={styles.detailInfo}>
          <div className={styles.skill}>
            <div className={styles.skillTitle}>Front End</div>
            {frontDummy.map((front) => (
              <SkillBox key={front.id} text={front.test} />
            ))}
          </div>
          <div className={styles.skill}>
            <div className={styles.skillTitle}>Back End</div>
            {backDummy.map((back) => (
              <SkillBox key={back.id} text={back.test} />
            ))}
          </div>
          <div className={styles.skill}>
            <div className={styles.skillTitle}>Dev Ops</div>
            {DevDummy.map((Dev) => (
              <SkillBox key={Dev.id} text={Dev.test} />
            ))}
          </div>

          <div className={styles.skill}>
            <div className={styles.skillTitle}>Tools</div>
            {ToolsDevDummy.map((tool) => (
              <SkillBox key={tool.id} text={tool.test} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default SkillsTools;
