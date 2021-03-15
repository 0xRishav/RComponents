import React from "react";
import "./CardsContainer.css";
import {
  CardWithBadge,
  CardWithDismiss,
  CardWithTextOverlay,
  HelloCard,
  HorizontalCardShadow
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
        <HorizontalCardShadow />
      </div>
    </div>
  );
}

export default CardsContainer;
