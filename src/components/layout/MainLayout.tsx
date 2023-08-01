import Side from "components/layout/Side";
import Header from "components/layout/Header";

import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const MainLayout = () => {
  return (
    <>
      <Side />
      <StMainWrapper>
        <StHeaderWrapper>
          <Header />
        </StHeaderWrapper>
        <Outlet />
      </StMainWrapper>
    </>
  );
};

export default MainLayout;

const StMainWrapper = styled.div`
  width: 55vh;
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