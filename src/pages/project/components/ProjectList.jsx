import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ProjectListHeader from "./ProjectListHeader";
import ProjectListBtn from "./ProjectListBtn";

function ProjectList({ styles, project }) {
  const { url, id } = project;
  const location = useLocation();
  console.log("location", location);

  // 링크 정보와 이름을 매핑
  const links = [
    { name: "상세보기", link: `${location.pathname}/${id}` },
    { name: "사이트", link: url.site },
    { name: "GitHub", link: url.github },
  ];

  console.log("links", links);

  return (
    <>
      <ul className={styles.projectList}>
        <li className={styles.projectBox}>
          <div className={styles.projectInfoWrapper}>
            <ProjectListHeader project={project} />
            <ProjectListBtn links={links} />
          </div>
          <div className={styles.projectImgWrapper}>
            <img src={project.img}></img>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProjectList;
