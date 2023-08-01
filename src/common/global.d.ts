export type RootState = {
  todos: Todo[];
};

export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}