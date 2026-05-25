import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import "./App.css";

import { Home } from "./pages/Home.tsx";
import { Create } from "./pages/Create.tsx";
import { Character } from "./pages/Character.tsx";

import { CharacterProvider } from "./context/CharacterContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Not found</div>,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CharacterProvider>
      <RouterProvider router={router} />
    </CharacterProvider>
  </StrictMode>,
);
