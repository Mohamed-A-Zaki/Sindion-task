import DetailsNavbar from "../../components/DetailsNavbar/DetailsNavbar";
import AllTicketsSidebar from "../../components/AllTicketsSidebar/AllTicketsSidebar";
import TicketDetailsLayout from "../../components/TicketDetailsLayout/TicketDetailsLayout";

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
