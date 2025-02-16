import { useImmer } from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export default function Task() {
  const [items, setItems] = useImmer([]);

  function handleItem(item) {
    setItems((draft) => {
      draft.push(item);
    });
  }

  return (
    <div>
      <TaskForm onSubmit={handleItem} />
      <TaskList items={items} />
    </div>
  );
}

// import { useState } from "react";
// import { useImmer } from "use-immer";

// export default function Task() {
//   const [item, setItem] = useState("");
//   const [items, setItems] = useImmer([]);

//   function handleChange(e) {
//     setItem(e.target.value);
//     console.log(item);
//   }

//   function handleClick(e) {
//     e.preventDefault();
//     setItems((draft) => {
//       draft.push(item);
//     });
//     setItem("");
//   }
//   return (
//     <div>
//       <h1>Item Form</h1>
//       <form action="">
//         <input type="text" onChange={handleChange} value={item} />
//         <button onClick={handleClick}>add</button>
//       </form>
//       <div>
//         <h1>List Item</h1>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
