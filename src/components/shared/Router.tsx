import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Intro from "components/pages/Intro";
import Main from "components/pages/Main";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Intro />} /> */}
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;