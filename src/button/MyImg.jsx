/* eslint-disable no-unused-vars */
export default function MyImg({ source }) {
  return (
    <img
      src={source}
      alt=""
      width="100px"
      onMouseEnter={(e) => alert("img said: u touch me")}
      onMouseOver={(e) => alert("img said: thank you")}
    />
  );
}
