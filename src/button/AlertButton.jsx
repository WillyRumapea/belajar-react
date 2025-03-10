import { useRef } from "react";

function AlertButton({ text, alertText }) {
  const counter = useRef(0);

  function handleClick(e) {
    console.log(e.target);
    alert(`${alertText} ${counter.current++}`);
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default AlertButton;
