import { Col, Row } from "react-bootstrap";
import IssueSection from "../IssueSection/IssueSection";
import TicketDetails from "../TicketDetails/TicketDetails";
import TicketStatus from "../TicketStatus/TicketStatus";

export default function TicketDetailsLayout() {
  return (
    <Row className="my-3 flex-grow-1 g-3">
      <Col xs={12} lg={8}>
        <IssueSection />
      </Col>
      <Col sx={12} lg={4}>
        <TicketStatus />
        <TicketDetails />
      </Col>
    </Row>
  );
}
