import React from "react";
import "./List.css";
import profilePicAvatar from "../../assets/profilePicAvatar.svg";

function List({ spaced = false }) {
  const List = ["Home", "About", "Price", "Connect"];
  return (
    <div className="List">
      {spaced
        ? List.map((listItem) => (
            <div className="List__wrapper">
              <h4 className="List__text">{listItem}</h4>
            </div>
          ))
        : [...Array(4)].map((e) => (
            <div className="List__notificationWrapper">
              <img
                className="List__image"
                src={profilePicAvatar}
                alt="profilepic"
              />
              <h4>you've got notification</h4>
            </div>
          ))}
    </div>
  );
}

export default List;
