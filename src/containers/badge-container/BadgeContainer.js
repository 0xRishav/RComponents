import React from "react";
import { Badge } from "../../components";
import "./BadgeContainer";

function BadgeContainer() {
  return (
    <div className="BadgeContainer container">
      <h2>Badges</h2>
      <div className="component-wrapper">
        <Badge badgeValue="3" color="red" />
        <Badge badgeValue=" " color="green" />
      </div>
    </div>
  );
}

export default BadgeContainer;
