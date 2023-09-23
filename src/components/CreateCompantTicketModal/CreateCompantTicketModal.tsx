import "./createCompantTicketModal.scss";
import { Form, Modal } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { close_create_company_ticket_modal } from "../../store/createCompanyTicketModalSlice";

import MainButton from "../../utils/MainButton";
import ModalHeader from "../../utils/ModalHeader";
import CancelButton from "../../utils/CancelButton";
import DropZoneComp from "../DropzoneComp/DropzoneComp";


export default function CreateCompantTicketModal() {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.createCompanyTicketModal);

  const handleClose = () => {
    dispatch(close_create_company_ticket_modal());
  };

  return (
    <Modal
      className="create_company_ticket_modal"
      show={show}
      onHide={handleClose}
    >
      <Form>
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
              required
            />
          </Form.Group>

          <div className="d-flex gap-3 mb-3">
            <Form.Group className="flex-grow-1">
              <Form.Label>From*</Form.Label>
              <Form.Select aria-label="Default select example" required>
                <option>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="flex-grow-1">
              <Form.Label>To*</Form.Label>
              <Form.Select aria-label="Default select example" required>
                <option>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={
                "e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
              }
            />
          </Form.Group>

          <DropZoneComp />
        </Modal.Body>

        {/* modal footer */}
        <Modal.Footer className="border-0">
          <CancelButton onClick={handleClose} />
          <MainButton onClick={() => {}}>Create</MainButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
