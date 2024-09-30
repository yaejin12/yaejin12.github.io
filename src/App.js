import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main"; // 정확한 경로
import Layout from "./pages/layouts/Layout"; // 정확한 경로
import Introduce from "./pages/Introduce/Introduce"; // 정확한 경로
import Project from "./pages/project/Project"; // 정확한 경로
import DetailProject3on3 from "./pages/detailProject/DetailProject3on3"; // 정확한 경로
import DetailProject5jo from "./pages/detailProject/DetailProject5jo"; // 정확한 경로

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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Layout 컴포넌트는 모든 페이지에 공통으로 적용되며 Outlet을 통해 하위 라우트를 렌더링 */}
        <Route path="/" element={<Layout />}>
          {/* Layout 내부의 자식 라우트들 */}
          <Route path="" element={<Main />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="project" element={<Project />}>
            {detailProject.map((project) => (
              <Route
                key={project.path}
                path={project.path}
                element={project.element}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
