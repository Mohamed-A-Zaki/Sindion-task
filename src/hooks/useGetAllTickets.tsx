import { useEffect } from "react";
import { useQuery } from "react-query";
import { BaseURL } from "../api/BaseURL";
import { TicketType } from "../types/tickets";
import { useAppDispatch } from "../store/hooks";
import { setTicketList } from "../store/ticketSlice";

export default function useGetAllTickets() {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery("tickets", () => {
    return BaseURL.get<TicketType[]>("tickets");
  });

  useEffect(() => {
    dispatch(setTicketList(data?.data as TicketType[]));
  }, [data?.data, dispatch]);

  return { data, isLoading, isError };
}
