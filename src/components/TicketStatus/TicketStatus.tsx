import "./TicketStatus.scss";
import { Form } from "react-bootstrap";

export default function TicketStatus() {
  return (
    <Form.Select
      aria-label="ticket-status-section"
      className="ticket-status-section text-white"
    >
      <option>Pending</option>
    </Form.Select>
  );
}
