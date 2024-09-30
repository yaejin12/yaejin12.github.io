import React from "react";


import Video from "./Video";
import SubImg from "./SubImg";

function ProjectVideo({ styles, project }) {


  return (
    <li className={styles.projectDetailBox}>
      <div className={styles.skillTitleWrapper}>
        {project.video ? (
          <Video styles={styles} project={project} />
        ) : (
          <SubImg styles={styles} project={project} />
        )}
      </div>
    </li>
  );
}

export default ProjectVideo;
