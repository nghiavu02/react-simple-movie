import React from "react";
import { NavLink } from "react-router-dom";

const ListLink = [
  {
    id: 0,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/movies",
    title: "Movies",
  },
];
const Header = () => {
  return (
    <header className="py-10 flex items-center justify-center gap-x-10 text-white text-[18px]">
      {ListLink.length > 0 &&
        ListLink.map((item) => (
          <NavLink
            to={item.to}
            key={item.id}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {item.title}
          </NavLink>
        ))}
    </header>
  );
};

export default Header;
