import axios from "axios";
import { useQuery } from "react-query";
import { TicketType } from "../types/tickets";

export default function useGetOneTicket(id: number) {
  const { data, isLoading, isError } = useQuery(
    ["ticket", id],
    () => {
      return axios.get<TicketType>(`http://localhost:8000/tickets/${id}`);
    }
  );

  return { data, isLoading, isError };
}
