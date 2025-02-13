import Todo from "./Todo.jsx";

export default function Todolist() {
  const data = [
    {
      id: 0,
      text: "memahami HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "memahami CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "memahami JavaScript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "memahami TypeScript",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </ul>
  );
}
