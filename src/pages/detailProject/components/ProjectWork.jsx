import React from "react";
import DetailTemplate from "../../../components/common/detailTemplate/DetailTemplate";
import ProjectWorkDetail from "./ProjectWorkDetail";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProjectWork({ styles }) {
  const paramsId = useParams();

  const projectDummy = useSelector((action) => action.project.dummy);
  const project = projectDummy.find(
    (project) => project.id === parseInt(paramsId.id)
  );



  return (
    <DetailTemplate title={"내가 기여한 부분"}>
      {project.works.map((project) => {
        return (
          <ProjectWorkDetail
            key={project.id}
            styles={styles}
            project={project}
          />
        );
      })}
    </DetailTemplate>
  );
}

export default ProjectWork;
