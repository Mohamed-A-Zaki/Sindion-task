import axios from "axios";
import { useQuery } from "react-query";
import { StatusType } from "../types/status";

export default function useGetAllStats() {
  const { data, isLoading, isError } = useQuery("stats", () => {
    return axios.get<StatusType[]>("http://localhost:8000/status");
  });

  return { data, isLoading, isError };
}
