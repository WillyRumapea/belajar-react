import { useState } from "react";

export default function Task({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
    // console.log(item);
  }

  function handleClick(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }

  return (
    <div>
      <h1>Item Form</h1>
      <form action="">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>add</button>
      </form>
    </div>
  );
}
