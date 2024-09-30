import { Children } from "react";
import Main from "../pages/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Introduce from "../pages/Introduce/Introduce";
import Project from "../pages/project/Project";
import DetailProject3on3 from "../pages/detailProject/DetailProject3on3";
import DetailProject5jo from "../pages/detailProject/DetailProject5jo";

const detailProject = [
  {
    path: "3on3",
    element: <DetailProject3on3 />,
  },
  {
    path: "5jo",
    element: <DetailProject5jo />,
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
