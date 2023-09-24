import { useQuery } from "react-query";
import { BaseURL } from "../api/BaseURL";
import { StatusType } from "../types/status";

export default function useGetAllStats() {
  const { data, isLoading, isError } = useQuery("stats", () => {
    return BaseURL.get<StatusType[]>("status");
  });

  return { data, isLoading, isError };
}
