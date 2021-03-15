import React from "react";
import { List } from "../../components";

function ListsContainer() {
  return (
    <div className="ListsContainer container">
      <h2>Lists</h2>
      <div className="component-wrapper">
        <List spaced />
        <List />
      </div>
    </div>
  );
}

export default ListsContainer;
