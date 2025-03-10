import { useState, useRef } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  //   function handleName(e) {
  //     setName(e.target.value);
  //   }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current.focus();

    alert(`name: ${name}, message: ${message}`);
  }

  return (
    <>
      <h1>Guest Form</h1>
      <form>
        <GuestBookForm ref={nameInput} name={name} setName={setName} />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          onChange={handleMessage}
          value={message}
        ></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
}
