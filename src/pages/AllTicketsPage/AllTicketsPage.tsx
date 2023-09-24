import DetailsNavbar from "../../components/AllTickets/DetailsNavbar/DetailsNavbar";
import AllTicketsSidebar from "../../components/AllTickets/AllTicketsSidebar/AllTicketsSidebar";
import TicketDetailsLayout from "../../components/AllTickets/TicketDetailsLayout/TicketDetailsLayout";
import { useParams } from "react-router-dom";

export default function AllTicketsPage() {
  const { id } = useParams();

  return (
    <>
      <DetailsNavbar />
      <div className="d-flex gap-3 overflow-hidden">
        <AllTicketsSidebar />
        <TicketDetailsLayout id={Number(id)} />
      </div>
    </>
  );
}
