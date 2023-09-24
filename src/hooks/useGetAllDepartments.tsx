import { useQuery } from "react-query";
import { BaseURL } from "../api/BaseURL";
import { DepartmentType } from "../types/department";


export default function useGetAllDepartments() {
  const { data} = useQuery("departments", () => {
    return BaseURL.get<DepartmentType[]>("departments");
  });

  return { data};
}
