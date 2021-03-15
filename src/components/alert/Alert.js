import React from "react";
import "./Alert.css";

function Alert({ type, emoji }) {
  return (
    <div className="Alert">
      <p className={type}>
        <span style={{ marginRight: "10px" }}>{emoji}</span>
        {type} Alert
      </p>
    </div>
  );
}

export default Alert;
