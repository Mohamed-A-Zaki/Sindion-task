import DetailsNavbar from "../../components/AllTickets/DetailsNavbar/DetailsNavbar";
import AllTicketsSidebar from "../../components/AllTickets/AllTicketsSidebar/AllTicketsSidebar";
import TicketDetailsLayout from "../../components/AllTickets/TicketDetailsLayout/TicketDetailsLayout";

export default function AllTicketsPage() {
  return (
    <>
      <DetailsNavbar />
      <div className="d-flex gap-3 overflow-hidden">
        <AllTicketsSidebar />
        <TicketDetailsLayout />
      </div>
    </>
  );
}
