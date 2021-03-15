import React from "react";
import { Input } from "../../components";
import "./InputContainer.css";

function InputContainer() {
  return (
    <div className="container">
      <h2>Inputs</h2>
      <div className="component-wrapper">
        <Input />
      </div>
    </div>
  );
}

export default InputContainer;
