import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ContainerCard from "./CointainerCard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContainerCard />
  </StrictMode>
);
