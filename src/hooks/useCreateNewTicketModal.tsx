import { useState } from "react";
import { open_create_company_ticket_modal } from "../store/createCompanyTicketModalSlice";
import { close_create_new_ticket_modal } from "../store/createNewTicketModalSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function useCreateNewTicketModal() {
  const [ticket, setTicket] = useState<"company" | "support">("company");

  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.createNewTicketModal);

  const handleClose = () => {
    dispatch(close_create_new_ticket_modal());
  };

  const handleCreateTicket = () => {
    handleClose();
    dispatch(open_create_company_ticket_modal());
  };

  return {
    ticket,
    setTicket,
    show,
    handleClose,
    handleCreateTicket,
  };
}
