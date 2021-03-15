import React from "react";
import "./Avatar.css";

function Avatar({ source, title }) {
  return (
    <div className="Avatar">
      <img className="Avatar__image" src={source} alt={`${source}Avatar`} />
      <h3>{title}</h3>
    </div>
  );
}

export default Avatar;
