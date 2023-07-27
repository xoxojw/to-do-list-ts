import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Intro from "components/pages/Intro";
import Main from "components/pages/Main";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;