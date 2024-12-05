import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./authProvider/AuthProvider";
import "./index.css";
import router from "./routes/Route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
