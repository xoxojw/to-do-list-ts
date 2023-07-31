import { Todo } from "components/common/global";
import shortid from "shortid";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Todo[] = [
  {
    id: shortid(),
    title: "타입스크립트 과제 lv 1",
    content: "금요일 밤까지 끝내기!",
    isDone: false,
  },
  {
    id: shortid(),
    title: "내일 할머니 생신 축하드리기",
    content: "꽃다발 사가는 것 잊지 말 것",
    isDone: true,
  },
  {
    id: shortid(),
    title: "빨래 하기",
    content: "바깥 옷은 건조기 돌리지 말 것",
    isDone: true,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      // .push 할 수 있는 이유 - immer
      state.push({ ...action.payload, id: shortid(), isDone: false });
    }
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;