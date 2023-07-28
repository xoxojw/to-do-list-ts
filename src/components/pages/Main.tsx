import Side from "components/layout/Side";
import Header from "components/layout/Header";
import TodoList from "components/todo/TodoList";
import AddTodo from "components/todo/AddTodo";

import { styled } from "styled-components";

const Main = () => {
  return (
    <>
      <Side />
      <StMainWrapper>
        <StHeaderWrapper>
          <Header />
        </StHeaderWrapper>
        <TodoList />
        <AddTodo />
      </StMainWrapper>
    </>
  );
};

export default Main;

const StMainWrapper = styled.div`
  width: 30vh;
  height: 80vh;
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: first baseline;
`;

const StHeaderWrapper = styled.div`
  height: 5vh;
`;
