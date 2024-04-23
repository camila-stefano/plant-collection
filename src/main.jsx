import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Explore from "./pages/Explore.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "explore", element: <Explore /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
