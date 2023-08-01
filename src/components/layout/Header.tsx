import { styled } from "styled-components";

const Header = () => {
  return (
    <>
      <StHeaderWrapper>
        <StTitle>Todo List</StTitle>
      </StHeaderWrapper>
    </>
  );
};

export default Header;

const StHeaderWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`

const StTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
`