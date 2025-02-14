function AlertButton({ text, alertText }) {
  function handleClick(e) {
    console.log(e.target);
    alert(alertText);
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default AlertButton;
