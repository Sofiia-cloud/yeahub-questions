import { createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Question from "./pages/Question/Question";
import Layout from "./components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ":questionId",
        element: <Question />,
      },
    ],
  },
]);
