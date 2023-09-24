import { useState } from "react";
import useGetAllDepartments from "./useGetAllDepartments";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { close_create_company_ticket_modal } from "../store/createCompanyTicketModalSlice";
import { TicketType } from "../types/tickets";
import useCreateNewTicket from "./useCreateNewTicket";

export default function useCreateCompantTicketModal() {
  const dispatch = useAppDispatch();
  const { tickets_list } = useAppSelector((state) => state.ticket);
  const { show } = useAppSelector((state) => state.createCompanyTicketModal);

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const { data } = useGetAllDepartments();
  const createNewTicket = useCreateNewTicket();
  const { mutate, isLoading } = createNewTicket;

  const handleClose = () => {
    dispatch(close_create_company_ticket_modal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ticket: TicketType = {
      id: tickets_list.length + 1,
      status: "Open",
      to,
      from,
      subject,
      description,
    };

    mutate(ticket);
  };

  return {
    show,
    handleClose,
    handleSubmit,
    to,
    setTo,
    from,
    setFrom,
    subject,
    setSubject,
    description,
    setDescription,
    data,
    isLoading,
  };
}
