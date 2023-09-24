import Statbar from "../../components/Home/Statbar";
import TicketsNavbar from "../../components/Home/TicketsNavbar";
import CreateNewTicketModal from "../../components/Home/CreateNewTicketModal";
import CreateCompantTicketModal from "../../components/Home/CreateCompantTicketModal";
import HomeContent from "../../components/Home/HomeContent/HomeContent";

export default function HomePage() {
  return (
    <div className="d-flex gap-3">
      <Statbar />
      <div className="flex-grow-1">
        <TicketsNavbar />
        <HomeContent />
      </div>
      <CreateNewTicketModal />
      <CreateCompantTicketModal />
    </div>
  );
}
