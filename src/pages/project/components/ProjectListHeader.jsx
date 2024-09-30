import React from "react";
import styles from "../Project.module.scss";

function ProjectListHeader({ project }) {
  return (
    <div className={styles.projectText}>
      <div>
        {project.title}
        {project.titleBr && (
          <>
            <br />
            {project.titleBr}
          </>
        )}
      </div>
      <p className={styles.infoDetail}>
        {project.info} <br />
        {project.infoBr}
      </p>
    </div>
  );
}

export default ProjectListHeader;
