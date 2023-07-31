import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <h1>Intro page</h1>
      <Link to={`/main`}>메인 페이지로</Link>
    </>
  );
};

export default Intro;
