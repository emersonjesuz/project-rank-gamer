import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);
