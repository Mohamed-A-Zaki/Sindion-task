import Ticket from "../Ticket/Ticket";
import useGetAllTickets from "../../../hooks/useGetAllTickets";

export default function TicketList() {
  const { data, isError, isLoading } = useGetAllTickets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return data?.data.map((ticket) => {
    return <Ticket {...ticket} key={ticket.id} />;
  });
}
