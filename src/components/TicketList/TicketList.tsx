import Ticket from "../Ticket/Ticket";

export default function TicketList() {
  return [...new Array(10)].map((_, indx) => {
    return <Ticket key={indx} indx={indx} />;
  });
}
