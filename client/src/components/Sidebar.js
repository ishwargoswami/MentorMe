import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import {   RiLogoutCircleLine } from "react-icons/ri";
import {  TbServicemark } from "react-icons/tb";
import { AiOutlineUser,  } from "react-icons/ai";
import { FiMessageSquare, FiCalendar, FiBook } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const menus = [
    { name: "Profile", link: "/Dashboard/Profile", icon: AiOutlineUser },
    { name: "Logout", link: "/", icon: RiLogoutCircleLine },
    { name: "Service", link: "/Dashboard/Service", icon: TbServicemark, margin: true },
    { name: "Priority DM", link: "/Dashboard/DM", icon: FiMessageSquare },
    { name: "Bookings", link: "/Dashboard/Booking", icon: FiBook},
    { name: "Calendar", link: "/Dashboard/Calendar", icon: FiCalendar },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section className="flex gap-6">
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        {/* MentorMe Logo/Text with Link */}
        {open && (
          <div className="logocontainer">
            <div className="logo-link">
              <h1>MentorMe</h1>
            </div>
          </div>
        )}
        {/* Menu Toggle */}
        <div className="menu-toggle">
          <HiMenuAlt3
            size={26}
            className="menu-toggle-icon"
            onClick={() => setOpen(!open)}
          />
        </div>
        {/* Menu Items */}
        <div className="menu-items">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`menu-item ${menu?.margin && "margin"}`}
            >
              <div className="icon">
                {React.createElement(menu?.icon, { size: "20" })}
              </div>
              <h2 className="name">{menu?.name}</h2>
            </Link>
          ))}
        </div>
      </div>
      {/* Main Content */}
    </section>
  );
};

export default Sidebar;

