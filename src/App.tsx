import "./App.scss";
import Sidebar from "./components/Home/Sidebar/Sidebar";
import Topbar from "./components/Home/Topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Topbar />
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
