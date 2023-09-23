import "./controls.scss";
import { Badge, Form, Image } from "react-bootstrap";

import ellipse from "../../assets/Ellipse.png";
import notification from "../../assets/Notification.png";

export default function Controls() {
  return (
    <div className="controls d-flex align-items-center gap-1">
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
  );
}
