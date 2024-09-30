import React, { useState } from "react";
import SkillProgram from "./SkillProgram";
import DetailTemplate from "../../../components/common/detailTemplate/DetailTemplate";

function DetailSkills({ project }) {
  const skills = project.skills;


  return (
    <DetailTemplate title={"skills"}>
      {skills.map((skill, i) => {
        return <SkillProgram key={i} skillList={skill} />;
      })}
    </DetailTemplate>
  );
}

export default DetailSkills;
