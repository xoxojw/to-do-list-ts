import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "components/redux/modules/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({
      title: input.title,
      content: input.content,
    }))
  }

  return (
    <>
      <StAddFormWrapper>
        <StAddForm onSubmit={onSubmit}>
          <StAddHeader>
            <StAddInputTitle>Typing Todo</StAddInputTitle>
            <StAddBtn type="submit">+</StAddBtn>
          </StAddHeader>
          <StInputTitle
            name="title"
            value={input.title}
            onChange={onChange}
            placeholder="제목을 입력하세요."
            required
          />
          <StInputContent
            name="content"
            value={input.content}
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
  width: 70%;
  height: 10vh;
  position: absolute;
  bottom: 20px;
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

const StAddInputTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

const StAddBtn = styled.button`
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`

const StInputTitle = styled.input`
  height: 25px;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
`;

const StInputContent = styled.input`
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
`