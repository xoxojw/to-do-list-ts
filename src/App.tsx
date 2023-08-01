import Router from "shared/Router";
import GlobalStyle from "components/styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
