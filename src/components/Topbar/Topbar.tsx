import "./topbar.scss";
import { Badge, Container, Form, Image, Navbar } from "react-bootstrap";

import ellipse from "../../assets/Ellipse.png";
import notification from "../../assets/Notification.png";

export default function Topbar() {
  return (
    <Navbar className="top-bar bg-white">
      <Container>
        <div>
          <div className="sub_title_big">Hello!</div>
          <div className="small_text_2">Welcome Back</div>
        </div>
        <div className="d-flex align-items-center gap-1">
          <Form.Select className="lang" aria-label="lang">
            <option value="1">EN</option>
            <option value="2">AR</option>
          </Form.Select>
          <div className="position-relative">
            <Image src={notification} alt="notification" />
            <Badge
              className="position-absolute top-0 start-100 rounded-circle"
              bg="danger"
            >
              3
            </Badge>
          </div>
          <div className="text-center">
            <Image src={ellipse} alt="ellipse" />
            <Form.Select className="profile py-0" aria-label="lang">
              <option value="1">Employee</option>
            </Form.Select>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
