import { useImmer } from "use-immer";

// const initialData = {
// name: "",
// message: ""
// }
export default function ContactForm() {
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  function handleNameChange(input) {
    setContact((contact) => {
      contact.name = input.target.value;
    });
    console.log(input);
  }
  //   setContact({
  //     name: e.target.value,
  //     message: contact.message,
  //   })

  function handleMessageChange(e) {
    setContact((contact) => {
      contact.message = e.target.value;
    });
  }

  //  setContact({
  //     name: contact.name,
  //     message: e.target.value,
  //   })

  const style = {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
  };
  return (
    <div>
      <h1>Form Contact</h1>
      <form action="" style={style}>
        <input
          type="text"
          placeholder="name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <div>
        <h1>Contact Detail</h1>
        <p>name: {contact.name}</p>
        <p>message: {contact.message}</p>
      </div>
    </div>
  );
}
