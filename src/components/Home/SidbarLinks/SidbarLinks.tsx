import "./SidebarLinks.scss";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";

import home from "../../../assets/Home.png";
import settings from "../../../assets/Setting.png";

export default function SidbarLinks() {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
      image: home,
    },
    {
      id: 2,
      name: "All Tickets",
      path: "/all-tickets/1",
      image: settings,
    },
    // {
    //   id: 2,
    //   name: "Profile",
    //   path: "/profile",
    //   image: profile,
    // },
    // {
    //   id: 3,
    //   name: "Settings",
    //   path: "/settings",
    //   image: settings,
    // },
  ];

  return (
    <div className="nav-links d-flex flex-column">
      {links.map(({ id, image, name, path }) => (
        <NavLink
          key={id}
          to={path}
          className="small_text_2 text-decoration-none text-white"
        >
          <Image src={image} className="p-3" />
          {name}
        </NavLink>
      ))}
    </div>
  );
}
