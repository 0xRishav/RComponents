import React from "react";
import { Button } from "../../components";
import "./ButtonContainer.css";

function ButtonContainer() {
  return (
    <div className="ButtonContainer container">
      <h2>Buttons</h2>
      <div className="component-wrapper">
        <Button type="Primary" />
        <Button type="Secondary" />
        <Button
          type="Icon"
          iconSrc="https://www.flaticon.com/svg/vstatic/svg/545/545705.svg?token=exp=1615754292~hmac=7e6a073666c7129cafae2acc2b228165"
        />
        <Button
          type="Icon"
          iconSrc="https://www.flaticon.com/svg/vstatic/svg/1237/1237946.svg?token=exp=1615755108~hmac=0d4b85ad5eac169688971269ae5f18a8"
          isFloatingActionBtn={true}
        />
      </div>
    </div>
  );
}

export default ButtonContainer;
