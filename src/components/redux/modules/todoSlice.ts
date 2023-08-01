import { RootState } from "common/global";
import shortid from "shortid";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RootState = {
  todos: [
    {
      id: shortid(),
      title: "빨래 하기",
      content: "바깥 옷은 건조기 돌리지 말 것",
      isDone: false,
    },
    {
      id: shortid(),
      title: "타입스크립트 과제 lv 1",
      content: "금요일 밤까지 끝내기!",
      isDone: true,
    },
    {
      id: shortid(),
      title: "내일 할머니 생신 축하드리기",
      content: "꽃다발 사가는 것 잊지 말 것",
      isDone: true,
    },
  ]
}

// 3. createSlice
const todoSlice = createSlice({
  name: "todosReducer",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(
        {
          id: shortid(),
          title: action.payload.title,
          content: action.payload.content,
          isDone: false,
        });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], isDone: !state.todos[index].isDone };
      }
    },    
  }
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice;