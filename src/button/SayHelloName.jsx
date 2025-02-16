export default function SayHelloName() {
  function handleClick(e) {
    e.preventDefault();
    const inputName = document.getElementById("id_name").value;
    document.querySelector("h1").innerHTML += inputName;
  }

  return (
    <>
      <form action="">
        <input type="text" id="id_name" />
        <button onClick={handleClick} style={{ marginTop: "10px" }}>
          sumbit
        </button>
      </form>
      <h1>hello </h1>
    </>
  );
}
