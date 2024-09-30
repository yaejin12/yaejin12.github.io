import { createSlice } from "@reduxjs/toolkit";
import meeting from "../assets/images/img/meeting.png";
import meetingLogo from "../assets/images/icons/meetingLogo.svg";
import fivejo from "../assets/images/img/5jo.png";
import fivejoSignUp from "../assets/images/img/5jo_signUp.png";
import fivejoDetail1 from "../assets/images/img/5jo_detail1.png";
import fivejoDetail2 from "../assets/images/img/5jo_detail2.png";
import fivejoDetail3 from "../assets/images/img/5jo_detail3.png";

const initialState = {
  dummy: [
    {
      id: 1,
      title: "과감하게 ",
      titleBr: "팅기지 말고 과팅",
      info: "대학생들을 주요 대상으로 하는 미팅 웹앱으로, ",
      infoBr: "소통과 만남을 중개해주는 플랫폼입니다.",
      date: "2024. 7. 17 - 2024. 8. 29",
      team: "3on3 조",
      img: meeting,
      video: "https://www.youtube.com/watch?v=qVWxRTHgnik&feature=youtu.be",
      subImg: [],
      url: {
        github: "https://github.com/3on3",
        site: "http://gwating.com/",
        notion:
          "https://aged-sea-aed.notion.site/5658f2d2fbd54e11a2b3525bfd048bce",
        ppt: "https://www.canva.com/design/DAGOv7BsxsI/OELVr2tf_w7rOtJAkvajKQ/view?utm_content=DAGOv7BsxsI&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      },

      overview: [
        "학교나 학과를 기반으로 네트워크를 형성할 수 있어, 학생들이 더욱 신뢰할 수 있는 인맥을 구축하는 데 도움을 줍니다.",
        "원하는 지역과 인원 수에 맞춰 검색이 가능하여 편리하게 과팅을 진행할 수 있습니다.",
        "채팅 기능을 통해 실제 만남 전에 상대방에 대해 미리 알아볼 수 있습니다.",
        "알림, 결제 등 과팅을 원활하게 돕는 다양한 기능이 제공됩니다.",
        "유저들이 멤버십 결제를 통해 다른 유저의 프로필 사진을 확인할 수 있도록 설계하여, 추가적인 기능을 제공하면서 자연스럽게 결제를 유도하는 수익 구조입니다.",
      ],

      skills: [
        {
          name: "FrontEnd",
          detail: {
            react: "React",
            javaScript: "JavaScript",
            AJAX: "AJAX",
            scss: "SASS/SCSS",
          },
        },
        {
          name: "BackEnd",
          detail: {
            JAVA: "JAVA",
            springBoot: "SpringBoot",
            JPA: "JPA",
          },
        },
        {
          name: "Dev",
          detail: {
            MySQL: "MySQL",
            MariaDB: "MariaDB",
            Redis: "Redis",
            Docker: "Docker",
            webSocket: "WebSocket",
            AWS: "AWS",
          },
        },
        {
          name: "Tools",
          detail: {
            git: "GIT",
            gitHub: "GitHub",
            figma: "Figma",
            discord: "Discord",
            notion: "Notion",
            postman: "Postman",
          },
        },
      ],

      works: [
        {
          id: 1,
          workPage: "메인페이지",
          workSkill: "FrontEnd & BackEnd",
          text: [
            {
              title: "미팅을 원하는 사용자 그룹 목록 조회 가능",
              detail: [
                "그룹유저가 호스트이고, 내가 속한 그룹이 아닌 리스트만 반환",
                "매칭이 된다면 리스트에서 제거",
              ],
            },
            {
              title:
                "성별 & 참여 인원 (3:3 / 4:4 / 5:5) & 원하는 지역 선택 시 해당 조건에 따라 필터링 된 그룹 목록만 열람 가능",
              detail: [
                "BooleanExpression 을 사용해 필터링하는 로직을 구현",
                "useSearchParams 훅으로 각 필터 상태관리",
                "필터 조건이 변경될 때 마다 동적 URL을 생성하여 서버요청",
              ],
            },
            {
              title: "무한스크롤 가능",
              detail: [],
            },
          ],
        },
        {
          id: 2,
          workPage: "익명게시판 덧글",
          workSkill: "FrontEnd & BackEnd",
          text: [
            {
              title: "각 게시물에 익명으로 댓글 작성 가능",
              detail: [],
            },
            {
              title: " 내가 작성한 댓글만 삭제 가능",
              detail: [],
            },
            {
              title: "무한스크롤 가능",
              detail: [],
            },
          ],
        },
        {
          id: 3,
          workPage: "그 외",
          workSkill: "FrontEnd",
          text: [
            {
              title: "페이지 생성",
              detail: [
                "게시글 생성 페이지",
                "내가 속한 그룹 페이지",
                "메인 그룹 페이지",
                "내가 속한 채팅 페이지",
              ],
            },
            {
              title: " 공통 컴포넌트",
              detail: ["Input", "그룹이 없을 경우 안내하는 메시지"],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "나의 애착 페이지 ",
      titleBr: "",
      info: "현대인들의 감성적인 소통과 웰빙을 지원하기 위해 ",
      infoBr: "개발된 디지털 소통 플랫폼입니다.",
      date: "2024. 6. 21 - 2024. 7. 9",
      team: "편히 쉬 조",
      img: fivejo,
      video: "",
      subImg: [fivejoDetail1, fivejoDetail2, fivejoDetail3, fivejoSignUp],
      url: {
        github: "https://github.com/project5jo",
      },

      overview: [
        "사용자가 편하게 자신의 생각을 정리하고, 익명으로 타인과 소통할 수 있는 공간을 제공합니다. ",
        "핵심 기능은 실시간 채팅, 다양한 주제를 통한 소통, 감성적인 디자인을 적용한 배경화면 등입니다. ",
        "테라피 용품 소개 및 판매를 통해 추가적인 수익 모델도 함께 제시하고 있습니다. ",
        "이로써 사용자들이 정서적 안정과 함께 더 나은 소통 환경을 누릴 수 있도록 돕는 것이 목표입니다.",
      ],

      skills: [
        {
          name: "FrontEnd",
          detail: {
            javaScript: "JavaScript",
            HTML: "HTML",
            JSP: "JSP",
            CSS: "CSS",
          },
        },
        {
          name: "BackEnd",
          detail: {
            JAVA: "JAVA",
            springBoot: "SpringBoot",
          },
        },
        {
          name: "Dev",
          detail: {
            MySQL: "MySQL",
            MariaDB: "MariaDB",
            webSocket: "WebSocket",
          },
        },
        {
          name: "Tools",
          detail: {
            git: "GIT",
            gitHub: "GitHub",
            figma: "Figma",
            postman: "Postman",
          },
        },
      ],

      works: [
        {
          id: 1,
          workPage: "로그인",
          workSkill: "FrontEnd & BackEnd",
          text: [
            {
              title: "로그인 & 자동 로그인",
              detail: [
                "회원 유무 확인",
                "session_id 저장하여 자동 로그인",
                "정규 표현식을 사용하여 유효성 검사",
              ],
            },
            {
              title: "아이디 찾기",
              detail: ["이름과 이메일을 받아 아이디 찾기"],
            },
            {
              title: "비밀번호 변경",
              detail: ["회원 아이디로 비번 수정"],
            },
          ],
        },
        {
          id: 2,
          workPage: "주문 결제",
          workSkill: "FrontEnd & BackEnd",
          text: [
            {
              title: "장바구니에 담겨있는 제품 렌더링",
              detail: [],
            },
            {
              title: "포인트 결제",
              detail: [
                "정규 표현식으로 검증하는 로직을 추가해 잘못된 입력을 방지",
                "비동기 통신으로 포인트와 결제 금액을 비교하는 검증 기능 구현",
                "조건이 충족되지 않으면 폼 제출 제한",
              ],
            },
          ],
        },
        {
          id: 3,
          workPage: "그 외",
          workSkill: "FrontEnd",
          text: [
            {
              title: "전체적인 디자인 방향성 제시",
              detail: [],
            },
            {
              title: "마크업 & CSS",
              detail: ["채팅창", "헤더"],
            },
            {
              title: "CSS 추가 작업",
              detail: ["shop 메인", "shop 상세페이지", "장바구니", "회원가입"],
            },
          ],
        },
      ],
    },
  ],
};

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

export const ProjectAction = ProjectSlice.actions;
export default ProjectSlice.reducer;
