import "./IssueTitle.scss";
import { Image } from "react-bootstrap";

import edit_icon from "../../assets/Edit.png";
import image from "../../assets/Ellipse 100.png";
import delete_icon from "../../assets/Group.png";
import Dot from "../../utils/Dot/Dot";

export default function IssueTitle() {
  return (
    <div className="issue-title d-flex align-items-center border-bottom p-4">
      <div className="flex-shrink-0">
        <img src={image} alt="..." />
      </div>
      <div className="flex-grow-1 ms-3">
        <div className="user-name sub_title_small">User Name</div>
        <div className="d-flex align-items-center">
          <span>27 Jon 2023</span>
          <Dot />
          <span>From: Department</span>
        </div>
      </div>
      <div className="d-flex gap-3">
        <Image src={edit_icon} />
        <Image src={delete_icon} />
      </div>
    </div>
  );
}
