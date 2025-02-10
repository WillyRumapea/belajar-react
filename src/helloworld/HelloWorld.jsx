import PropTypes from "prop-types";
import React from "react";

function HeaderHelloWorld() {
  const text = "Hello World";
  return (
    <h1
      style={{
        color: "#808080",
        fontFamily: "monospace",
      }}
    >
      {text.toLocaleUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "saya belajar React JS";
  const style = {
    color: "sky",
    fontSize: "30px",
  };
  return <p style={style}>{text.toLocaleLowerCase()}</p>;
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
HariBelajarReact.propTypes = {
  urutan: PropTypes.string.isRequired,
};

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
