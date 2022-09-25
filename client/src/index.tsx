import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";
import Providers from "./providers";
import { LoadingProvider } from "./providers/Loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <Providers>
          <App />
        </Providers>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>
);
