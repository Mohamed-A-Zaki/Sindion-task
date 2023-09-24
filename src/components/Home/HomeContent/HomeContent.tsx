import { useEffect } from "react";
import { useAppDispatch } from "../../../store/hooks";
import NoDataToShow from "../NoDataToShow";
import TicketsTable from "../TicketsTable";
import { setTicketList } from "../../../store/ticketSlice";
import useGetAllTickets from "../../../hooks/useGetAllTickets";
import { TicketType } from "../../../types/tickets";

export default function HomeContent() {
  const dispath = useAppDispatch();
  const { data, isLoading, isError } = useGetAllTickets();

  useEffect(() => {
    dispath(setTicketList(data?.data as TicketType[]));
  }, [data?.data, dispath]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      {data?.data.length ? (
        <TicketsTable data={data?.data} />
      ) : (
        <NoDataToShow />
      )}
    </>
  );
}
