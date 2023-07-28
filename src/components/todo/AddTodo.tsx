import { styled } from "styled-components";

const AddTodo = () => {
  return (
    <>
      <StAddFormWrapper>
        <StAddHeader>
          <h2>Add</h2>
          <button>+</button>
        </StAddHeader>
        <StAddInput />
      </StAddFormWrapper>
    </>
  );
};

export default AddTodo;

const StAddFormWrapper = styled.div`
  width: 25vh;
  height: 10vh;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StAddHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const StAddInput = styled.input`
  height: 50px;
`;