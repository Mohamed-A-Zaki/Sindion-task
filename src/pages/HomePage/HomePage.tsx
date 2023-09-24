import Statbar from "../../components/Home/Statbar";
import NoDataToShow from "../../components/Home/NoDataToShow";
import TicketsNavbar from "../../components/Home/TicketsNavbar";
import TicketsTable from "../../components/Home/TicketsTable";
import CreateNewTicketModal from "../../components/Home/CreateNewTicketModal";
import CreateCompantTicketModal from "../../components/Home/CreateCompantTicketModal";

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
