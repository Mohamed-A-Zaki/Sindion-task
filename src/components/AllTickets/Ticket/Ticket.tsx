import "./Ticket.scss";
import { Button, Image } from "react-bootstrap";
import status_img from "../../../assets/company_name.png";
import Dot from "../../../utils/Dot/Dot";
import { TicketType } from "../../../types/tickets";
import { useNavigate } from "react-router-dom";

export default function Ticket({ id, from, to, status }: TicketType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/all-tickets/${id}`);
  };

  return (
    <div
      className={`ticket ${status} d-flex justify-content-between p-3 border-start border-4${
        id === 0 && " active"
      }`}
      onClick={handleClick}
    >
      <div className="ticket-info">
        <div className="user-name">User Name</div>
        <div className="my-1 d-flex align-items-center">
          <div className="date">27 Jon 2023</div>
          <Dot />
          <div className="from">From: {from}</div>
        </div>
        <span className="to">To: {to}</span>
        <div className="branch">Branch</div>
      </div>
      <div className="ticket-status d-flex flex-column align-items-center justify-content-between">
        <Button size="sm" className="border-0">
          {status}
        </Button>
        <Image src={status_img} alt="status" />
      </div>
    </div>
  );
}
