import "./ticketsTable.scss";
import { Button, Image, Table } from "react-bootstrap";
import company_name from "../../assets/company_name.png";

export default function TicketsTable() {
  return (
    <div className="teckets-table bg-white border overflow-auto">
      <Table responsive>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>From</th>
            <th>To</th>
            <th>From</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[...new Array(10)].map((_ele, indx) => (
            <tr key={indx} className="canceled">
              <td className="d-flex gap-2 align-items-center">
                <Image src={company_name} className="img-fluid" />
                <span className="company_name">Company Name</span>
              </td>
              <td>Graphic Designer</td>
              <td>front-End Developer</td>
              <td>Internal</td>
              <td>27 Jon 2023</td>
              <td>
                <Button className="border-0">Solved</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
