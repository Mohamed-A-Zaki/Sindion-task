import "./statbar.scss";
import Chart from "../Chart";
import StatItems from "../StatItems";
import { Form } from "react-bootstrap";

export default function Statbar() {
  return (
    <div className="stat-bar p-2 border flex-shrink-0">
      <Form.Select className="profile py-0" aria-label="lang">
        <option value="1">
          Today
        </option>
      </Form.Select>
      <Chart />
      <StatItems />
    </div>
  );
}
