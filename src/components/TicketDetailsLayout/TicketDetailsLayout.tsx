import { Col, Row } from "react-bootstrap";
import IssueSection from "../IssueSection/IssueSection";
import TicketDetails from "../TicketDetails/TicketDetails";

export default function TicketDetailsLayout() {
  return (
    <Row className="my-3 flex-grow-1">
      <Col xs={12} lg={8}>
        <IssueSection />
      </Col>
      <Col sx={12} lg={4}>
        <TicketDetails />
      </Col>
    </Row>
  );
}
