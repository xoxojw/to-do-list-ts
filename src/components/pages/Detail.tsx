import { RootState, Todo } from "common/global";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Detail = () => {
  const { id } = useParams<{ id: string; }>();
  const todos = useSelector((state: RootState) => state.todos);
  const todo = todos.find((todo: Todo) => todo.id === id);
  return (
    <>
      <StDetailWrapper>
        <h1>{todo?.title}</h1>
        <span>{todo?.content}</span>
      </StDetailWrapper>
    </>
  );
};

export default Detail;

const StDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
