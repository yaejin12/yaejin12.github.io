import React from "react";
import detailIcon from "../../../assets/images/icons/detail_W.svg";
import DetailBtn from "../../../components/common/button/DetailBtn";
import styles from "../Project.module.scss";
function ProjectListBtn({ links }) {
  return (
    <div className={styles.projectLink}>
      {links.map((btn, i) => {
        return (
          btn.link && (
            <span key={i}>
              <DetailBtn
                text={btn.name}
                detailIcon={!(btn.name === "GitHub") ? detailIcon : null}
                link={btn.link}
              />
            </span>
          )
        );
      })}
    </div>
  );
}

export default ProjectListBtn;
