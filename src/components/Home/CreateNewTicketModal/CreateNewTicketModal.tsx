import { useState } from "react";
import "./CreateNewTicketModal.scss";

import MainButton from "../../../utils/MainButton";
import ModalHeader from "../../../utils/ModalHeader";
import CancelButton from "../../../utils/CancelButton";

import { Form, Image, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { close_create_new_ticket_modal } from "../../../store/createNewTicketModalSlice";
import { open_create_company_ticket_modal } from "../../../store/createCompanyTicketModalSlice";

import create_company from "../../../assets/layers-two-01.png";
import create_support from "../../../assets/layers-three-01.png";

export default function CreateNewTicketModal() {
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

  return (
    <Modal className="create_new_ticket_modal" show={show} onHide={handleClose}>
      {/* modal header */}
      <ModalHeader
        title={"Create Now Ticket"}
        sub_title={"Chose Ticket type to create new ticket"}
      />

      {/* modal body */}
      <Modal.Body>
        {/* create company ticket */}
        <div
          className={`item create-company-ticket d-flex p-3 rounded-3 ${
            ticket === "company" && "active"
          }`}
          onClick={() => setTicket("company")}
        >
          <div className="flex-shrink-0">
            <Image src={create_company} alt="create_company" />
          </div>
          <div className="flex-grow-1 ms-3">
            <div className="title">Create Company Ticket</div>
            <p className="desc">
              Creating a new ticket to be sent between company departments
            </p>
          </div>
          <div>
            <Form.Check
              type={"radio"}
              name="ticket"
              value="company"
              checked={ticket === "company"}
            />
          </div>
        </div>

        {/* create support ticket */}
        <div
          className={`item create-support-ticket d-flex p-3 rounded-3 ${
            ticket === "support" && "active"
          }`}
          onClick={() => setTicket("support")}
        >
          <div className="flex-shrink-0">
            <Image src={create_support} alt="create_support" />
          </div>
          <div className="flex-grow-1 ms-3">
            <div className="title">Create Support Ticket</div>
            <p className="desc">
              Creating a new ticket to be sent to a department in another
              company
            </p>
          </div>
          <div>
            <Form.Check
              type={"radio"}
              name="ticket"
              value="support"
              checked={ticket === "support"}
            />
          </div>
        </div>
      </Modal.Body>

      {/* modal footer */}
      <Modal.Footer className="border-0">
        <CancelButton onClick={handleClose} />
        <MainButton onClick={handleCreateTicket}>Continue</MainButton>
      </Modal.Footer>
    </Modal>
  );
}
