import React from "react";
import "./helloworld.css";

function HeaderHelloWorld() {
  const text = "Hello World";
  return <h1>{text.toLocaleUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "saya belajar React JS";

  return <p>{text.toLocaleLowerCase()}</p>;
}

function HariBelajarReact({ urutan }) {
  return <h1>Hari ke belajar {urutan ? urutan : "kesekian"} React🚀</h1>;
}

function Mentor() {
  const mentors = ["Pak Sandhika", "Pak Eko"];
  return (
    <ul>
      Mentor By
      {mentors.map((mentor) => (
        <li key={mentor}>{mentor}</li>
      ))}
    </ul>
  );
}

function TombolKlik() {
  const [klik, setKlik] = React.useState(0);

  function handleClik() {
    setKlik(klik + 1);
  }
  return <button onClick={handleClik}>klik {klik}</button>;
}

export default function HelloWorld() {
  return (
    <div>
      <div>
        <HeaderHelloWorld />
        <ParagraphHelloWorld />
        <HariBelajarReact urutan="kesatu" />
        <Mentor />
        <TombolKlik />
      </div>
      <div>
        <HeaderHelloWorld />
        <ParagraphHelloWorld />
        <HariBelajarReact urutan="kedua" />
        <Mentor />
      </div>
      <div>
        <HeaderHelloWorld />
        <ParagraphHelloWorld />
        <HariBelajarReact urutan="ketiga" />
        <Mentor />
      </div>
      <div>
        <HeaderHelloWorld />
        <ParagraphHelloWorld />
        <HariBelajarReact />
        <Mentor />
      </div>
    </div>
  );
}
