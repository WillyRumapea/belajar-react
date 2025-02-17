import { useState } from "react";

export default function Counter({ name }) {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
    // if (counter === 1) {
    //   const h1 = document.getElementById("title");
    //   h1.style.display = "none";
    // }
    console.log(counter);
    console.log();
  }
  return (
    <div>
      <h1 id="title">
        counter {name}: {counter}
      </h1>
      <button onClick={handleCounter}>increment</button>
    </div>
  );
}
