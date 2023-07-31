import { useState } from "react";

import { Todo } from "components/common/global";
import ListTodos from "components/todo/ListTodos";
import AddTodo from "components/todo/AddTodo";

import shortid from "shortid";

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([
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
      isDone: false,
    },
    {
      id: shortid(),
      title: "빨래 하기",
      content: "바깥 옷은 건조기 돌리지 말 것",
      isDone: true,
    },
  ]);
  return (
    <>
      <ListTodos todos={todos} setTodos={setTodos} />
      <AddTodo todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Main;
