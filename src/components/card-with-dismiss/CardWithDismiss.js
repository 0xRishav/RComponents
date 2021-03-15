import React from "react";
import "./CardWithDismiss.css";
import { AiFillCloseCircle } from "react-icons/ai";

function CardWithDismiss() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="CardWithDismiss__backgroundDiv">
        <div className="CardWithDismiss__icon">
          <AiFillCloseCircle color="#f93154" size="25px" />
        </div>

        <div className="CardWithDismiss">
          <div className="CardWithDismiss__textDiv">
            <h4 style={{ fontSize: "2rem" }}>Hey I am dismiss Card 👋</h4>
          </div>
        </div>
      </div>
      <h4>Card With Dismiss</h4>
    </div>
  );
}

export default CardWithDismiss;
