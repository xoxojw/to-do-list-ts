import React, { useState } from "react";
import { Todo, TodosProps } from "components/common/global";
import shortid from "shortid";
import { styled } from "styled-components";

const AddTodo = ({ todos, setTodos }: TodosProps) => {
  const initialState = { id: shortid(), title: "", content: "", isDone: false };
  const [todo, setTodo] = useState(initialState);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTodo({ ...todo, [name]: value });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { ...todo, id: shortid() }]);
    setTodo(initialState);
  }

  return (
    <>
      <StAddFormWrapper>
        <StAddForm onSubmit={onSubmit}>
          <StAddHeader>
            <h2>Add</h2>
            <StAddBtn>+</StAddBtn>
          </StAddHeader>
          <StInputTitle
            name="title"
            value={todo.title}
            onChange={onChange}
            placeholder="제목을 입력하세요."
            required
          />
          <StInputContent
            name="content"
            value={todo.content}
            onChange={onChange}
            placeholder="내용을 입력하세요."
            required
          />
        </StAddForm>
      </StAddFormWrapper>
    </>
  );
};

export default AddTodo;

const StAddFormWrapper = styled.div`
  width: 80%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StAddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StAddHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const StAddBtn = styled.button`
  outline: none;
  border: none;
  background-color: none;
  font-size: 18px;
  font-weight: 700;
`

const StInputTitle = styled.input`
  height: 25px;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
`;

const StInputContent = styled.input`
  height: 25px;outline: none;
  border: none;
  border-bottom: 1px solid gray;
`