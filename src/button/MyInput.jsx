export default function MyInput() {
  return (
    <input
      className="collInput"
      type="text"
      onKeyDown={(e) => console.log(e.target.value)}
    />
  );
}
