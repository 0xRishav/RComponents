import React from "react";
import { DesktopNav } from "../../components";
import "./NavContainer.css";

function NavContainer() {
  return (
    <div className="container">
      <h2>Navigation</h2>
      <div className="component-wrapper">
        <DesktopNav />
      </div>
    </div>
  );
}

export default NavContainer;
