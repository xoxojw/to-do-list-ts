import { styled } from "styled-components";

const TodoList = () => {
  return (
    <>
        <StTodoItem>
          Todo List 1
        </StTodoItem>
        <StTodoItem>
          Todo List 2
        </StTodoItem>
    </>
  );
};

export default TodoList;

const StTodoItem = styled.div`
  width: 25vh;
  height: 3vh;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 10px;
`