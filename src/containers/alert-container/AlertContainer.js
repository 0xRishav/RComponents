import React from "react";
import { Alert } from "../../components";

function AlertContainer() {
  return (
    <div className="AlertContainer container">
      <h2>Alerts</h2>
      <div className="component-wrapper">
        <Alert type="Success" emoji="✅" />
        <Alert type="Danger" emoji="☠️" />
        <Alert type="Warning" emoji="⚠️" />
        <Alert type="Info" emoji="ℹ️" />
      </div>
    </div>
  );
}

export default AlertContainer;
