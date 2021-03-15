import React from "react";
import "./CardWithBadge.css";

function CardWithBadge() {
  return (
    <div class="wrapper">
      <div class="card" data-label="In Progress">
        <div class="card__container">
          <h1 class="card__header">Lorem Ipsum</h1>
          <p class="card__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            vestibulum, tortor orci tellus, consectetur lorem dui. Nisl aliquet
            egestas imperdiet gravida dolor amet nibh
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardWithBadge;
