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
      {/* show2 ? <Counter name="willea" /> : <p>hilang</p> */}
      {/* {show2 ? (
        <div>
          <Counter name="pea" />
        </div>
      ) : (
        <section>
          <Counter name="willea" />
        </section>
      )} */}
      {/* {!show2 && <Counter name="willea" />}
      {show2 && <Counter name="pea" />} */}
      {show2 ? (
        <Counter key="1" name="willea" />
      ) : (
        <Counter key="2" name="will's" />
      )}
      <input onChange={handleShow2} checked={show2} type="checkbox"></input>
      tampilkan show 2
    </div>
  );
}
