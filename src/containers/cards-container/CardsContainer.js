import React from "react";
import "./CardsContainer.css";
import {
  CardWithBadge,
  CardWithDismiss,
  CardWithTextOverlay,
  HelloCard,
} from "../../components";

function CardsContainer() {
  return (
    <div className="container">
      <h2>Cards</h2>
      <div className="component-wrapper">
        <CardWithBadge />
        <HelloCard />
        <CardWithDismiss />
        <CardWithTextOverlay />
      </div>
    </div>
  );
}

export default CardsContainer;
