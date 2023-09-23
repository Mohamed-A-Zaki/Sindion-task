import "./IssueSection.scss";
import IssueTitle from "../IssueTitle/IssueTitle";
import IssueSubject from "../IssueSubject/IssueSubject";

export default function IssueSection() {
  return (
    <div className="issue-section border">
      <IssueTitle />
      <IssueSubject />
    </div>
  );
}
