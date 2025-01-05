import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthContext from "./context/AuthContext.jsx";
import "./index.css";
import App from "./App.jsx";
import TaskContext from "./context/TaskContext.jsx";

// localStorage.clear();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>
);
