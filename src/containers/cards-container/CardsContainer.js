import React from "react";
import "./CardsContainer.css";
import { CardWithBadge, CardWithDismiss } from "../../components";

function CardsContainer() {
  return (
    <div className="container">
      <div className="component-wrapper">
        <CardWithBadge />
        <CardWithDismiss />
      </div>
    </div>
  );
}

export default CardsContainer;
