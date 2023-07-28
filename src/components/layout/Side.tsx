import { styled } from "styled-components";
import { convertTimestamp } from "components/utils/date";

const Side = () => {
  const today = new Date();
  const formattedDate = convertTimestamp(today);

  return (
    <>
      <StDate>{formattedDate}</StDate>
    </>
  );
};

export default Side;

const StDate = styled.p`
  font-size: 36px;
  font-weight: 500;
`