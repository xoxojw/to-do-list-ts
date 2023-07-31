import { Todo, TodosProps } from "components/common/global";
import { styled } from "styled-components";

const ListTodos = ({ todos, setTodos }: TodosProps) => {
  // 진행중인 Todos 먼저, 완료된 Todo는 뒤에 보이도록 Todos 정렬
  const sortedTodos = todos.slice().sort((a, b) => (a.isDone ? 1 : -1));

  // 완료여부(isDone) 토글
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>, todoId: string) => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  // 삭제
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, todoId: string) => {
    e.preventDefault();
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  }

  return (
    <>
      {sortedTodos.map((todo) => {
        return (
          <StTodoItem key={todo.id}>
            <StItemHeader>
              <StTodoTitle isDone={todo.isDone}>{todo.title}</StTodoTitle>
              <StTodoIsDone>{todo.isDone ? "✅완료" : "🏃진행 중"}</StTodoIsDone>
            </StItemHeader>
            <StItemBody>
              <StTodoContent isDone={todo.isDone}>{todo.content}</StTodoContent>
              <StBtnContainer>
                <StBtn onClick={(e) => handleToggle(e, todo.id)}>
                  {todo.isDone ? "진행 중" : "완료"}
                </StBtn>
                <StBtn onClick={(e) => handleDelete(e, todo.id)}>삭제</StBtn>
              </StBtnContainer>
            </StItemBody>
          </StTodoItem>
        );
      })}
    </>
  );
};

export default ListTodos;

const StTodoItem = styled.div`
  width: 80%;
  height: 5vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  padding: 10px;
  line-height: 2;
`;

const StItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StTodoTitle = styled.h3<{ isDone: boolean }>`
  font-weight: 700;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

const StTodoIsDone = styled.p`
  font-size: 14px;
`

const StItemBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StTodoContent = styled.h3<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

const StBtnContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const StBtn = styled.button`
  width: 55px;
  height: 30px;
  background-color: #edf4fa;
  border: 1px solid gray;
  border-radius: 5px;
`;
