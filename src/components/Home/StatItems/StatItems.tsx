import "./StatItems.scss";
import stroke from "../../../assets/Stroke-3.png";
import { Image, ListGroup } from "react-bootstrap";
import useGetAllStats from "../../../hooks/useGetAllStats";
import { useAppSelector } from "../../../store/hooks";

export default function StatItems() {
  const { tickets_list } = useAppSelector((state) => state.ticket);

  const { data, isError, isLoading } = useGetAllStats();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <ListGroup className="stat-links">
      <ListGroup.Item className="border-0 bg-transparent border-top">
        <div
          className={`item d-flex align-items-center gap-2 p-2 rounded-2 active-item`}
        >
          <div className={`color`}></div>
          <div className="text flex-grow-1">
            All Tickets <span>({tickets_list?.length})</span>
          </div>
          <Image src={stroke} />
        </div>
      </ListGroup.Item>

      {data?.data.map(({ id, name }) => (
        <ListGroup.Item key={id} className="border-0 bg-transparent border-top">
          <div className={`item d-flex align-items-center gap-2 p-2 rounded-2`}>
            <div className={`color ${name}`}></div>
            <div className="text flex-grow-1">
              {name} <span>({0})</span>
            </div>
            <Image src={stroke} />
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
