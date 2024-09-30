import React from "react";
import GradationBg from "../../components/common/gradationBg/GradationBg";
import styles from "./DetailProject.module.scss";
import DetailHeader from "./DetailHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function DetailProject() {
  const paramsId = useParams();

  const projectDummy = useSelector((action) => action.project.dummy);

  const project = projectDummy.find(
    (project) => project.id === parseInt(paramsId.id)
  );

  return (
    <GradationBg>
      <div className={styles.detailProjectWrapper}>
        <div className={styles.inner}>
          <DetailHeader project={project} />
        </div>
      </div>
    </GradationBg>
  );
}

export default DetailProject;
