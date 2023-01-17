import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.module.scss";

const base = () => (
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
   const root = ReactDOM.hydrateRoot(rootElement);
   root.render(base());
}
else {
   const root = ReactDOM.createRoot(rootElement);
   root.render(base());
}