import React from "react";
import "./Badge.css";
import profilePicAvatar from "../../assets/profilePicAvatar.svg";

function Badge({ badgeValue, color }) {
  return (
    <div className="Badge">
      <span className={`Badge__span Badge__span--${color}`}>{badgeValue}</span>
      <img
        className="Badge__image"
        src={profilePicAvatar}
        alt="profile-picture-avatar"
      />
    </div>
  );
}

export default Badge;
