import "./TicketDetails.scss";

export default function TicketDetails() {
  return (
    <div className="ticket-details border p-4 mt-3">
      <div className="title mb-3">Details</div>
      <div className="item d-flex flex-row my-2">
        <div className="key">Send by</div>
        <div className="value d-flex align-items-center gap-2">
          <div className="avatar rounded-circle text-white d-flex align-items-center justify-content-center">
            Y
          </div>
          Yara Ayad
        </div>
      </div>
      <div className="item d-flex flex-row my-2">
        <div className="key">Department</div>
        <div className="value">Accounting</div>
      </div>
      <div className="item d-flex flex-row my-2">
        <div className="key">Assigned to</div>
        <div className="value">Marketing</div>
      </div>
      <div className="item d-flex flex-row my-2">
        <div className="key">Status</div>
        <div className="value">Pending</div>
      </div>
      <div className="item d-flex flex-row my-2">
        <div className="key">Created time</div>
        <div className="value">05 Jul 2023, 08:30 AM</div>
      </div>
    </div>
  );
}
