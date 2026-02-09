import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./contextApi/ContextApi.jsx";

// Create Query Client (only once)
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
        <Toaster position="top-center" />
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
