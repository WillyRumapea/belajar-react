export default function Toolbar({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: "green", padding: "10px" }}
    >
      <button onClick={onClick}>pertama</button>
      <button onClick={onClick}>kedua</button>
    </div>
  );
}
