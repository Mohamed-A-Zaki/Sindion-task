import { Container, Navbar } from "react-bootstrap";
import Controls from "../../../utils/Controls/Controls";

export default function Topbar() {
  return (
    <Navbar className="bg-white">
      <Container>
        <div>
          <div className="sub_title_big">Hello!</div>
          <div className="small_text_2">Welcome Back</div>
        </div>
        <Controls />
      </Container>
    </Navbar>
  );
}
