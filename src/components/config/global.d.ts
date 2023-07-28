import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export interface TodosProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}