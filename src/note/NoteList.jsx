import Note from "./Note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note onChange={onChange} onDelete={onDelete} note={note} />
        </li>
      ))}
    </ul>
  );
}
