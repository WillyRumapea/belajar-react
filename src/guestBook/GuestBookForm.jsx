export default function GuestBookForm({ ref, name, setName }) {
  return (
    <>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        name="name"
        ref={ref}
      />
      <br />
    </>
  );
}
