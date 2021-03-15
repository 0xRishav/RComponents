import React from "react";
import "./HelloCard.css";

function HelloCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="HelloCard">
        <h3 className="HelloCard__heading">hello.</h3>
      </div>
      <h4>Hello Card</h4>
    </div>
  );
}

export default HelloCard;
