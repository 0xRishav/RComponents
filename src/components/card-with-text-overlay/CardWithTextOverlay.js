import React from "react";
import "./CardWithTextOverlay.css";

function CardWithTextOverlay() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="CardWithTextOverlay">
        <h4>Sample Text</h4>
      </div>
      <h4>Card With Text Overlay</h4>
    </div>
  );
}

export default CardWithTextOverlay;
