import { createBrowserRouter } from "react-router-dom";

import RootLayout from "components/layout/RootLayout";
import Intro from "components/pages/Intro";
import MainLayout from "components/layout/MainLayout";
import Main from "components/pages/Main";
import Detail from "components/pages/Detail";
import NotFound from "components/pages/NotFound";

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
          },
        ]
      },
      {
        path: "/detail/:id",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <Detail />
          }
        ]
      },
    ],
  }
])

export default Router;