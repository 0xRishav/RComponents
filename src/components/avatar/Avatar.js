import React from "react";
import "./Avatar.css";

function Avatar({ source, title = "", size }) {
  return (
    <div className="Avatar">
      <img
        style={{ width: size }}
        className="Avatar__image"
        src={source}
        alt={`${source}Avatar`}
      />
      {title != "" && <h3>{title}</h3>}
    </div>
  );
}

export default Avatar;
