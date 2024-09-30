import React from "react";
import GradationBg from "../../components/common/gradationBg/GradationBg";
import styles from "./DetailProject.module.scss";
import DetailHeader from "./DetailHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function DetailProject5jo() {
  const projectDummy = useSelector((action) => action.project.dummy);

  return (
    <GradationBg>
      <div className={styles.detailProjectWrapper}>
        <div className={styles.inner}>
          <DetailHeader project={projectDummy[1]} />
        </div>
      </div>
    </GradationBg>
  );
}

export default DetailProject5jo;
