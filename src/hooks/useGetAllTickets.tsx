import axios from "axios";
import { useQuery } from "react-query";
import { TicketType } from "../types/tickets";

export default function useGetAllTickets() {
  const { data, isLoading, isError } = useQuery("tickets", () => {
    return axios.get<TicketType[]>("http://localhost:8000/tickets");
  });

  return { data, isLoading, isError };
}
