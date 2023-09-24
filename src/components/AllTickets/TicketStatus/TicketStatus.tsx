import { useAppSelector } from "../../../store/hooks";
import "./TicketStatus.scss";
import { Form } from "react-bootstrap";

export default function TicketStatus() {
  const { ticket } = useAppSelector((state) => state.ticket);

  return (
    <Form.Select
      aria-label="ticket-status-section"
      className="ticket-status-section text-white"
    >
      <option>{ticket?.status}</option>
    </Form.Select>
  );
}
