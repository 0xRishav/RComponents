import React from "react";
import "./CardWithBadge.css";

function CardWithBadge() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="wrapper">
        <div className="card" data-label="In Progress">
          <div className="card__container">
            <h1 className="card__header">Lorem Ipsum</h1>
            <p className="card__body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              vestibulum, tortor orci tellus, consectetur lorem dui. Nisl
              aliquet egestas imperdiet gravida dolor amet nibh
            </p>
          </div>
        </div>
      </div>
      <h4>Card With Badge</h4>
    </div>
  );
}

export default CardWithBadge;
