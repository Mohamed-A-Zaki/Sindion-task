import "./sidebar.scss";
import Logo from "../../utils/Logo/Logo";
import SidbarLinks from "../SidbarLinks/SidbarLinks";

export default function Sidebar() {
  return (
    <div className="sidebar flex-shrink-0">
      <Logo />
      <SidbarLinks />
    </div>
  );
}
