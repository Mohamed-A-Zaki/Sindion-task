import "./FilterTickets.scss";
import { Form, Image } from "react-bootstrap";
import arrow from "../../assets/Stroke-3 (1).png";

export default function FilterTickets() {
  return (
    <div className="filter-tickets d-flex gap-1 align-items-center">
      <div className="arrow border rounded d-flex align-items-center justify-content-center">
        <Image src={arrow} alt="arrow" />
      </div>
      <Form.Select
        aria-label="Default select example"
        className="w-50 my-2 border-0 bg-transparent"
      >
        <option>All Tickets</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}
