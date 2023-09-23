import "./statItems.scss";
import stroke from "../../assets/Stroke-3.png";
import { Image, ListGroup } from "react-bootstrap";

export default function StatItems() {
  const items = [
    {
      id: 1,
      text: "All Tickets",
      color: "",
      count: 0,
    },
    {
      id: 2,
      text: "Solved",
      color: "solved",
      count: 0,
    },
    {
      id: 3,
      text: "Pending",
      color: "pending",
      count: 0,
    },
    {
      id: 4,
      text: "In progress",
      color: "in-progress",
      count: 0,
    },
    {
      id: 5,
      text: "Canceled",
      color: "canceled",
      count: 0,
    },
    {
      id: 6,
      text: "Closed",
      color: "closed",
      count: 0,
    },
  ];

  return (
    <ListGroup className="stat-links">
      {items.map(({ id, color, text, count }) => (
        <ListGroup.Item key={id} className="border-0 bg-transparent border-top">
          <div
            className={`item d-flex align-items-center gap-2 p-2 rounded-2${
              id === 1 && " active-item"
            }`}
          >
            <div className={`color ${color}`}></div>
            <div className="text flex-grow-1">
              {text} <span>({count})</span>
            </div>
            <Image src={stroke} />
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
