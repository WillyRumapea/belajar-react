import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialNotes = [
  {
    id: id++,
    text: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    text: "Learn CSS",
    done: true,
  },
  {
    id: id++,
    text: "Learn JavaScript",
    done: false,
  },
  {
    id: id++,
    text: "Learn React JS",
    done: false,
  },
];

function notesReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index] = { ...action };
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }

  // switch (action.type) {
  //   case "ADD_NOTE":
  //     return [
  //       ...notes,
  //       {
  //         id: id++,
  //         text: action.text,
  //         done: false,
  //       },
  //     ];
  //   case "CHANGE_NOTE":
  //     return notes.map((note) =>
  //       note.id === action.id
  //         ? { ...note, text: action.text, done: action.done }
  //         : note
  //     );
  //   case "DELETE_NOTE":
  //     return notes.filter((note) => note.id !== action.id);
  //   default:
  //     return notes;
  // }
}

export default function NoteApp() {
  // const [notes, dispacth] = useReducer(notesReducer, initialNotes);
  const [notes, dispacth] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispacth({
      type: "ADD_NOTE",
      text: text,
    });
    // setNotes((draft) => {
    //   draft.push({
    //     id: id++,
    //     text: text,
    //     done: false,
    //   });
    // });
  }

  function handleChangeNote(note) {
    dispacth({
      type: "CHANGE_NOTE",
      ...note,
    });
    // setNotes((draft) => {
    //   const index = draft.findIndex((item) => item.id === note.id);
    //   draft[index] = note;
    // });
  }

  function handleDeleteNote(note) {
    dispacth({
      type: "DELETE_NOTE",
      id: note.id,
    });
    // setNotes((draft) => {
    //   const index = draft.findIndex((item) => item.id == note.id);
    //   draft.splice(index, 1);
    // });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
