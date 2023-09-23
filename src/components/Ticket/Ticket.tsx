import "./Ticket.scss";
import { Button, Image } from "react-bootstrap";
import status from "../../assets/company_name.png";
import Dot from "../../utils/Dot/Dot";

export type TicketProps = {
  indx: number;
};

export default function Ticket({ indx }: TicketProps) {
  return (
    <div
      className={`ticket ${"solved"} d-flex justify-content-between p-3 border-start border-4${
        indx === 0 && " active"
      }`}
    >
      <div className="ticket-info">
        <div className="user-name">User Name</div>
        <div className="my-1 d-flex align-items-center">
          <div className="date">27 Jon 2023</div>
          <Dot />
          <div className="from">From: Department</div>
        </div>
        <span className="to">To: Department</span>
        <div className="branch">Branch</div>
      </div>
      <div className="ticket-status d-flex flex-column align-items-center justify-content-between">
        <Button size="sm" className="border-0">
          Pending
        </Button>
        <Image src={status} alt="status" />
      </div>
    </div>
  );
}
