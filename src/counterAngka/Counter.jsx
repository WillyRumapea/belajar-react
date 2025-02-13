import React from "react";

function Increment({ setHitung }) {
  const style = {
    marginRight: "5px",
    marginBottom: "2px",
  };
  return (
    <button style={style} onClick={() => setHitung((prev) => prev + 1)}>
      +
    </button>
  );
}

function Decrement({ setHitung }) {
  const style = {
    marginLeft: "5px",
    marginBottom: "2px",
  };
  return (
    <button style={style} onClick={() => setHitung((prev) => prev - 1)}>
      -
    </button>
  );
}

function Reset({ setHitung }) {
  const style = {
    marginLeft: "5px",
  };
  return (
    <button onClick={() => setHitung(0)} style={style}>
      reset
    </button>
  );
}

export default function Counter() {
  const [hitung, setHitung] = React.useState(0);

  return (
    <>
      <div>
        <Increment setHitung={setHitung} />
        <span>{hitung}</span>
        <Decrement setHitung={setHitung} />
      </div>
      <div>
        <Reset setHitung={setHitung} />
      </div>
    </>
  );
}
