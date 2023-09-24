import Statbar from "../../components/Statbar";
import NoDataToShow from "../../components/NoDataToShow";
import TicketsNavbar from "../../components/TicketsNavbar";
import TicketsTable from "../../components/TicketsTable";
import CreateNewTicketModal from "../../components/CreateNewTicketModal";
import CreateCompantTicketModal from "../../components/CreateCompantTicketModal";

export default function HomePage() {
  return (
    <div className="d-flex gap-3">
      <Statbar />
      <div className="flex-grow-1">
        <TicketsNavbar />
        {[1].length ? <TicketsTable /> : <NoDataToShow />}
      </div>
      <CreateNewTicketModal />
      <CreateCompantTicketModal />
    </div>
  );
}
