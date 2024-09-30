import { Children } from "react";
import Main from "../pages/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Introduce from "../pages/Introduce/Introduce";
import Project from "../pages/project/Project";
import DetailProject from "../pages/detailProject/DetailProject";

const detailProject = [
  {
    path: ":id",
    element: <DetailProject />,
  },
];
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "project",
        element: <Project />,
        children: detailProject,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;
