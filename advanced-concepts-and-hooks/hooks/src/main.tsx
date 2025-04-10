import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/async-components/nav";
import Club from "./components/async-components/club";
import { mainRoute } from "./components/async-components/main";
import { booksRoute } from "./components/async-components/books";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, ...mainRoute },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
