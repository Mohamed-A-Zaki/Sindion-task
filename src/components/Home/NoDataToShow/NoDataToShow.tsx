import "./NoDataToShow.scss";

import { Image } from "react-bootstrap";
import NewTicketButton from "../../../utils/NewTicketButton";

import image from "../../../assets/No data-pana 1.png";

export default function NoDataToShow() {
  return (
    <div className="no-data-to-show container bg-white d-flex align-items-center flex-column justify-content-center py-5 gap-3 border">
      <Image src={image} className="img-fluid" />
      <div className="title">No data to show</div>
      <div className="desc">
        Create a new Ticket Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </div>
      <NewTicketButton />
    </div>
  );
}
