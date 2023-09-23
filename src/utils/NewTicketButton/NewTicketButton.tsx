import "./newTicketButton.scss";
import plus from "../../assets/plus.png";
import { Button, Image } from "react-bootstrap";

import { useAppDispatch } from "../../store/hooks";
import { open_create_new_ticket_modal } from "../../store/createNewTicketModalSlice";

export default function NewTicketButton() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(open_create_new_ticket_modal());
  };

  return (
    <Button className="new-ticket-button border-0" onClick={handleClick}>
      <Image src={plus} alt="plus" className="me-2" />
      New ticket
    </Button>
  );
}
