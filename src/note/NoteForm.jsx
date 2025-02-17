import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClik() {
    setText("");
    onAddNote(text);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="add note"
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleClik}>Add</button>
    </div>
  );
}
