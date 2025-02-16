import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function countClik() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <div>
      <button onClick={countClik}>increment</button>
      <h1>jumlah: {counter}</h1>
    </div>
  );
}
