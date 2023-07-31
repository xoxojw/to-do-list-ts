import { createBrowserRouter } from "react-router-dom";

import RootLayout from "components/layout/RootLayout";
import Intro from "components/pages/Intro";
import MainLayout from "components/layout/MainLayout";
import Main from "components/pages/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Intro />,
      },
      {
        path: "/main",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <Main />,
          }
        ]
      },
    ]
  }
])

export default Router;