import Initial from "./Initial.jsx";
import Photo from "./Photo.jsx";
import Qoute from "./Qoute.jsx";

export default function ContainerCard() {
  const src = "../../public/naruto-sage-mode.svg";
  return (
    <div>
      <Photo source={src} />
      <Qoute />
      <Initial />
    </div>
  );
}
