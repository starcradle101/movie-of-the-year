import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HeaderLayout } from "./components/layout/HeaderLayout";
import { BaseLayout } from "./components/layout/BaseLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import UserPage from "./pages/user/UserPage";
import SearchPage from "./pages/search/SearchPage";
import ResultPage from "./pages/result/ResultPage";
import HomePage from "./pages/home/HomePage";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/result", element: <ResultPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    element: <HeaderLayout />,
    children: [
      { path: "/user", element: <UserPage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
