import "./logo.scss"
import { Image } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="logo text-center">
      <Image src={logo} alt="logo" />
      <div className="border-1 border m-auto"></div>
    </div>
  );
}
