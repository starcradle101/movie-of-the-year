import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./components/layout/Layout";
import { NotFoundPage } from "./pages/NotFoundPage";
import UserPage from "./pages/user/UserPage";
import SearchPage from "./pages/search/SearchPage";
import ResultPage from "./pages/result/ResultPage";
import HomePage from "./pages/home/HomePage";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/user", element: <UserPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/result", element: <ResultPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
