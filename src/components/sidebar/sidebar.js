import React, { useState } from "react";
import {
  FaBars,
  FaUserAlt,
  FaProjectDiagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { BsFileEarmarkPdf } from "react-icons/bs";

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaUserAlt />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <FaProjectDiagram />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaPhoneAlt />,
    },
    {
      path: "/pdf",
      name: "pdf",
      icon: <BsFileEarmarkPdf />,
    },
  ];
  return (
    <div id="box">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar bg-primary">
        <div className="top_section ">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
