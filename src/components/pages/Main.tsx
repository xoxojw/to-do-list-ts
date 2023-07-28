import React, { useState } from "react";

import shortid from "shortid";

import Side from "components/layout/Side";
import MainLayout from "components/layout/MainLayout";

const Main = () => {  
  return (
    <>
      <Side />
      <MainLayout />
    </>
  );
};

export default Main;
