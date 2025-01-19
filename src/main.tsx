import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { StarknetProvider } from "./components/starknet/StarknetProvider.tsx";

import { BrowserRouter } from "react-router-dom";
import { StarknetProvider } from "./component/Provider.tsx";
// import { StarknetProvider } from "./component/starknet/StarknetProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <StarknetProvider>
      <App />
      </StarknetProvider>
    </BrowserRouter>
  </StrictMode>
);
