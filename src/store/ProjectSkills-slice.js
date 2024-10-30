import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mySkills: [
    "React",
    "Redux",
    "SCSS",
    "JavaScript",
    "HTML5",
    "CSS",
    "JSP",
    "Ajax",
    "Java",
    "Spring Boot",
    "MyBatis",
    "MySQL",
    "MariaDB",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
  ],
  meetingSkills: [
    "React",
    "JavaScript",
    "AJAX",
    "SASS/SCSS",
    "JAVA",
    "SpringBoot",
    "JPA",
    "MySQL",
    "MariaDB",
    "Docker",
    "Redis",
    "WebSocket",
    "AWS",
    "GIT",
    "GitHub",
    "Figma",
    "Discord",
    "Notion",
    "Postman",
  ],
  healingPageSkills: [
    "JavaScript",
    "HTML",
    "JSP",
    "CSS",
    "JAVA",
    "SpringBoot",
    "MySQL",
    "MyBatis",
    "WebSocket",
    "GIT",
    "GitHub",
    "Figma",
    "Postman",
  ],
};

const ProjectSkillsSlice = createSlice({
  name: "projectSkills",
  initialState,
  reducers: {},
});

export const ProjectAction = ProjectSkillsSlice.actions;
export default ProjectSkillsSlice.reducer;
