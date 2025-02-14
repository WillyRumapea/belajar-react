import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Counter from "./Counter.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import MyInput from "../button/MyInput.jsx";
// import MyImg from "../button/MyImg.jsx";
import Toolbar from "../button/Toolbar.jsx";
import Search from "../button/Search.jsx";

// const src = "../../public/vite.svg";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <AlertButton text="click me!!" alertText={"mpshhh... ahhh"} />
    <MyButton text="smash me!!" onSmash={() => alert("you smash me!!")} />
    <MyInput />
    {/* <MyImg source={src} /> */}
    <Toolbar
      onClick={(e) => {
        e.stopPropagation();
        alert("toolbar is clicked");
      }}
    />
    <Search />
  </StrictMode>
);
