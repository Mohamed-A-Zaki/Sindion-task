import { Container, Image, Navbar } from "react-bootstrap";
import Controls from "../../../utils/Controls/Controls";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function DetailsNavbar() {
  return (
    <Navbar className="bg-white d-flex align-items-center justify-content-between shadow-sm">
      <Container>
        <Link to="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Controls />
      </Container>
    </Navbar>
  );
}
