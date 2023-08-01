import { styled } from "styled-components";

const NotFound = () => {
  return (
    <>
      <StTitle>404</StTitle>
      <StText>Oops..! Not Found! 😂</StText>
    </>
  );
};

export default NotFound;

const StTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
`

const StText = styled.h2`
  font-size: 32px;
`
