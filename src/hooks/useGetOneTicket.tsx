import { useQuery } from "react-query";
import { BaseURL } from "../api/BaseURL";
import { TicketType } from "../types/tickets";

export default function useGetOneTicket(id: number) {
  const { data, isLoading, isError } = useQuery(["ticket", id], () => {
    return BaseURL.get<TicketType>(`tickets/${id}`);
  });

  return { data, isLoading, isError };
}
