import React from "react";
import "./AvatarContainer.css";
import femaleAvatar from "../../assets/femaleAvatar.svg";
import malaAvatar from "../../assets/malaAvatar.svg";
import profilePicAvatar from "../../assets/profilePicAvatar.svg";
import { Avatar } from "../../components";

function AvatarContainer() {
  return (
    <div className="AvatarContainer container">
      <h2>Avatars</h2>
      <div className="component-wrapper">
        <Avatar source={femaleAvatar} title="Female Avatar" />
        <Avatar source={malaAvatar} title="Male Avatar" />
        <Avatar source={profilePicAvatar} title="Profile Picture" />
      </div>
    </div>
  );
}

export default AvatarContainer;
