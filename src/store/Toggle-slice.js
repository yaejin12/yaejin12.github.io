import { createSlice } from "@reduxjs/toolkit";

// 블랙 배경이면 true인지 확인-> true면 메뉴바를 흰색으로 변경
const initialState = {
  isBlackRef: false,
};

const BlackRefSlice = createSlice({
  name: "isBlackRef",
  initialState,
  reducers: {
    toggleBlackRef(state, action) {
      state.isBlackRef = action.payload;
    },
  },
});

export const { toggleBlackRef } = BlackRefSlice.actions;
export const BlackRefReducer = BlackRefSlice.reducer;

// 메뉴 닫힘 상태에 대한 초기 상태 설정
const isCloseInitialState = {
  isCloseMenu: false,
};
// isCloseMenu에 대한 slice 생성
const isCloseMenu = createSlice({
  name: "isCloseMenu",
  initialState: isCloseInitialState,
  reducers: {
    toggleCloseMenu(state, action) {
      state.isCloseMenu = action.payload;
    },
  },
});

export const closeMenuReducer = isCloseMenu.reducer;
export const { toggleCloseMenu } = isCloseMenu.actions;
