import React from "react";
import "./CardsContainer.css";
import { CardWithBadge, CardWithDismiss, HelloCard } from "../../components";

function CardsContainer() {
  return (
    <div className="container">
      <div className="component-wrapper">
        <CardWithBadge />
        <HelloCard />
      </div>
    </div>
  );
}

export default CardsContainer;
