import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetingProject: [
    {
      id: 0,
      title: "메인페이지",
      text: ["조건에 따른 다중필터링", "그룹 목록 조회", "무한스크롤 구현"],
    },
    {
      id: 1,
      title: "익명게시판",
      text: ["댓글 목록 조회, 등록 구현", "내가 쓴 글만 삭제", "무한스크롤"],
    },
    {
      id: 2,
      title: "그 외 페이지 생성",
      text: ["게시글 생성", "내가 속한 그룹", "내가 속한 채팅 페이지"],
    },
    {
      id: 3,
      title: "공통 컴포넌트",
      text: ["Input 컴포넌트", "그룹이 없을 경우 안내하는 메시지"],
    },
  ],
  meetingUrl: [
    {
      url: [
        "https://github.com/3on3",
        "https://www.canva.com/design/DAGOv7BsxsI/OELVr2tf_w7rOtJAkvajKQ/view?utm_content=DAGOv7BsxsI&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
        "https://www.notion.so/5658f2d2fbd54e11a2b3525bfd048bce?pvs=4",
      ],
    },
  ],

  healingPage: [
    {
      id: 0,
      title: "로그인",
      text: ["로그인","자동로그인", "아이디 찾기", "비밀번호 변경"],
    },
    {
      id: 1,
      title: "주문 결제",
      text: ["장바구니에 담겨있는 제품 렌더링", "포인트 결제"],
    },
    {
      id: 2,
      title: "전체적인 마크업 & CSS",
      text: ["채팅창", "shop 메인", "shop 상세페이지", "장바구니", "회원가입"],
    },
  ],
  healingPageUrl: [
    {
      url: ["https://github.com/project5jo"],
    },
  ],
};

const MyContributionSlice = createSlice({
  name: "myContribution",
  initialState,
  reducers: {},
});

export default MyContributionSlice.reducer;
export const MyContributionAction = MyContributionSlice.actions;
