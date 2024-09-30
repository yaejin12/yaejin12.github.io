import React from "react";
import styles from "./DetailProject.module.scss";
import DetailHeaderTitle from "./components/DetailHeaderTitle";
import DetailMainImg from "./components/DetailMainImg";
import DetailSkills from "./components/DetailSkills";
import ProjectWork from "./components/ProjectWork";
import ProjectVideo from "./components/ProjectVideo";

function DetailHeader({ project }) {
  return (
    <ul className={styles.projectDetail}>
      <DetailHeaderTitle styles={styles} project={project} />
      <DetailMainImg styles={styles} project={project} />
      <DetailSkills styles={styles} project={project} />
      <ProjectVideo styles={styles} project={project} />
      <ProjectWork styles={styles} project={project} />
    </ul>
  );
}

export default DetailHeader;
