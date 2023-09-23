import "./modalHeader.scss";
import { Image, Modal } from "react-bootstrap";
import icon from "../../assets/new_ticket.jpg";

export type ModalHeaderProps = {
  title: string;
  sub_title: string;
};
export default function ModalHeader({ title, sub_title }: ModalHeaderProps) {
  return (
    <Modal.Header closeButton className="border-0">
      <div className="d-flex align-items-center gap-3">
        <div className="create-ticket-icon">
          <Image src={icon} alt="" />
        </div>
        <div>
          <div className="title">{title}</div>
          <div className="sub-title">{sub_title}</div>
        </div>
      </div>
    </Modal.Header>
  );
}
