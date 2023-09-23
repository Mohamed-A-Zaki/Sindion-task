import "./ticketsNavbar.scss";
import NewTicketButton from "../../utils/NewTicketButton";
import { Container, Form, Image, Navbar } from "react-bootstrap";

import search from "../../assets/search.png";
import filter from "../../assets/Filter.png";

export default function TicketsNavbar() {
  return (
    <Navbar className="tickets-nav-bar bg-white border mb-2">
      <Container className="gap-3 flex-wrap">
        <Navbar.Brand>My tickets</Navbar.Brand>
        {/* <div className="vr"></div> */}
        <div className="views">view (0)</div>
        <div className="position-relative flex-grow-1">
          <Image
            src={search}
            className="position-absolute top-50 translate-middle"
          />
          <Form.Control
            type="text"
            placeholder="Search..."
            className="mw-100"
          />
        </div>
        <Image src={filter} />
        {/* <div className="vr"></div> */}
        <NewTicketButton />
      </Container>
    </Navbar>
  );
}
