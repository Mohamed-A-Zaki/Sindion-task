import { useQuery } from "react-query";
import { BaseURL } from "../api/BaseURL";
import { TicketType } from "../types/tickets";

export default function useGetAllTickets() {
  const { data, isLoading, isError } = useQuery("tickets", () => {
    return BaseURL.get<TicketType[]>("tickets");
  });

  return { data, isLoading, isError };
}
