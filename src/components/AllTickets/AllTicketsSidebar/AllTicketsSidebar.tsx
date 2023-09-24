import "./AllTicketsSidebar.scss";

import TicketList from "../TicketList/TicketList";
import FilterTickets from "../FilterTickets/FilterTickets";

export default function AllTicketsSidebar() {
  return (
    <div className="all-tickets-sidebar bg-white overflow-auto flex-shrink-0">
      <FilterTickets />
      <TicketList />
    </div>
  );
}
