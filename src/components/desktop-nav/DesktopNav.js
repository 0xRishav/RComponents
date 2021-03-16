import React from "react";
import "./DesktopNav.css";
import { DiReact } from "react-icons/di";
import { IoIosNotificationsOutline } from "react-icons/io";
import profilePicAvatar from "../../assets/profilePicAvatar.svg";
import { Avatar } from "../index";

function DesktopNav() {
  const links = ["Docs", "Tutorial", "Community", "Blog"];
  return (
    <div className="DesktopNav">
      <div className="DesktopNav__wrapper">
        <DiReact size="50px" />
        <div className="DesktopNav__listWrapper">
          <ul className="DesktopNav__ul" style={{ listStyleType: "none" }}>
            {links.map((link) => (
              <li className="DesktopNav__li">{link}</li>
            ))}
          </ul>
        </div>
        <input
          className="DesktopNav__searchInput"
          type="search"
          placeholder="Search"
        />
        <div className="DesktopNav__notificationProfileContainer">
          <IoIosNotificationsOutline size="25px" />
          <Avatar source={profilePicAvatar} title="" size="30px" />
        </div>
      </div>
    </div>
  );
}

export default DesktopNav;
