import { Todo } from "components/common/global";
import Router from "components/shared/Router";
import GlobalStyle from "components/styles/GlobalStyle";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";

interface RootState {
  todos: Todo[];
}

const App = () => {
  const todos = useSelector((state: RootState) => state.todos);
  console.log("rtk todos => ", todos)
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
