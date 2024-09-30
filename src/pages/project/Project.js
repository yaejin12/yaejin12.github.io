import React from "react";
import styles from "./Project.module.scss";
import ProjectList from "./components/ProjectList";

import GradationBg from "../../components/common/gradationBg/GradationBg";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Project() {
  const location = useLocation();

  const isRootPath = location.pathname === "/project";
  const projectDummy = useSelector((state) => state.project.dummy);

  return (
    <>
      {isRootPath && (
        <GradationBg>
          <div className={styles.projectWrapper}>
            <div className={styles.inner}>
              {projectDummy.map((project) => {
                return (
                  <ProjectList
                    key={project.id}
                    project={project}
                    styles={styles}
                  />
                );
              })}
            </div>
          </div>
        </GradationBg>
      )}
      <Outlet />
    </>
  );
}

export default Project;
