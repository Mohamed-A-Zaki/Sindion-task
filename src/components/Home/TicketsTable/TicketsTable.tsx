import "./TicketsTable.scss";
import { TicketType } from "../../../types/tickets";
import { Button, Image, Table } from "react-bootstrap";
import company_name from "../../../assets/company_name.png";

type TicketsTableProps = {
  data: TicketType[];
};

export default function TicketsTable({ data }: TicketsTableProps) {
  return (
    <div className="teckets-table bg-white border overflow-auto">
      <Table responsive>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>From</th>
            <th>To</th>
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, from, to, status }) => (
            <tr key={id} className={status}>
              <td className="d-flex gap-2 align-items-center">
                <Image src={company_name} className="img-fluid" />
                <span className="company_name">Company Name</span>
              </td>
              <td>{from}</td>
              <td>{to}</td>
              <td>Internal</td>
              <td>27 Jon 2023</td>
              <td>
                <Button className="border-0">{status}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
