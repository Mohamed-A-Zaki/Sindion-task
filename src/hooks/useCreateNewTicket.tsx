import { useMutation } from "react-query";
import { BaseURL } from "../api/BaseURL";
import { TicketType } from "../types/tickets";
import { useAppDispatch } from "../store/hooks";
import { close_create_company_ticket_modal } from "../store/createCompanyTicketModalSlice";

export default function useCreateNewTicket() {
  const dispatch = useAppDispatch();

  const mutation = useMutation(
    (ticket: TicketType) => BaseURL.post("tickets", ticket),
    {
      onSuccess() {
        dispatch(close_create_company_ticket_modal());
        window.location.reload()
      },
      onError() {
        alert("Error...");
      },
    }
  );
  return mutation;
}
