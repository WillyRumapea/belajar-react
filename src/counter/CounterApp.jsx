import { useState } from "react";
import Counter from "./Counter.jsx";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleShow2(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {/* {show2 ? <Counter name="willea" /> : <Counter name="will" />} */}
      {show2 ? <Counter name="willea" /> : <p>hilang</p>}
      <input onChange={handleShow2} checked={show2} type="checkbox"></input>
      tampilkan show 2
    </div>
  );
}
