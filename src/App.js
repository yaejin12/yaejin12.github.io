import "./App.css";
import { router } from "./config/route-config";
import { RouterProvider } from "react-router-dom";
import Layout from "./pages/layouts/Layout";

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
