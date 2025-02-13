import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import { StrictMode } from "react";
import Todolist from "../todolist/Todolist.jsx";
import Table from "../table/Table.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
    </Container>
    <Todolist />
    <Table />
  </StrictMode>
);
