import "./CreateCompantTicketModal.scss";
import { Form, Modal } from "react-bootstrap";

import MainButton from "../../../utils/MainButton";
import ModalHeader from "../../../utils/ModalHeader";
import CancelButton from "../../../utils/CancelButton";
import DropZoneComp from "../DropzoneComp/DropzoneComp";
import useCreateCompantTicketModal from "./../../../hooks/useCreateCompantTicketModal";

export default function CreateCompantTicketModal() {
  const {
    show,
    handleClose,
    subject,
    from,
    to,
    description,
    handleSubmit,
    setSubject,
    setFrom,
    setTo,
    setDescription,
    data,
    isLoading,
  } = useCreateCompantTicketModal();

  return (
    <Modal
      className="create_company_ticket_modal"
      show={show}
      onHide={handleClose}
    >
      <Form onSubmit={handleSubmit}>
        {/* modal header */}
        <ModalHeader
          title={"Create Company Ticket"}
          sub_title={
            "Creating a new ticket to be sent between company departments"
          }
        />

        {/* modal body */}
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject*</Form.Label>
            <Form.Control
              type="text"
              placeholder="What is your Subject?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-flex gap-3 mb-3">
            <Form.Group className="flex-grow-1">
              <Form.Label>From*</Form.Label>
              <Form.Select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                aria-label="Default select example"
                required
              >
                <option>Select Department</option>
                {data?.data.map((ele) => {
                  return (
                    <option key={ele.id} value={ele.name}>
                      {ele.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="flex-grow-1">
              <Form.Label>To*</Form.Label>
              <Form.Select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                aria-label="Default select example"
                required
              >
                <option>Select Department</option>
                {data?.data.map((ele) => {
                  return (
                    <option key={ele.id} value={ele.name}>
                      {ele.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={
                "e.g. I joined Stripe’s Customer Success team to help them grow."
              }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <DropZoneComp />
        </Modal.Body>

        {/* modal footer */}
        <Modal.Footer className="border-0">
          <CancelButton onClick={handleClose} />
          <MainButton type="submit" disabled={isLoading}>Create</MainButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
