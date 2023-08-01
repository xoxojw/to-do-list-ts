import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";

const store = configureStore({
  reducer: todoSlice.reducer,
})

export default store;
