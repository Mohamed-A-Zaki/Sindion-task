import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import IssueSection from "../IssueSection/IssueSection";
import TicketDetails from "../TicketDetails/TicketDetails";
import TicketStatus from "../TicketStatus/TicketStatus";
import useGetOneTicket from "../../../hooks/useGetOneTicket";
import { useAppDispatch } from "../../../store/hooks";
import { setTicket } from "../../../store/ticketSlice";
import { TicketType } from "../../../types/tickets";
import { useParams } from "react-router-dom";

export default function TicketDetailsLayout() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, isError, data } = useGetOneTicket(Number(id));

  useEffect(() => {
    dispatch(setTicket(data?.data as TicketType));
  }, [data?.data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

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
