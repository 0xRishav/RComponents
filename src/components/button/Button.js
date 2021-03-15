import React from "react";
import "./Button.css";

function Button({ type, iconSrc = "", isFloatingActionBtn = false }) {
  return (
    <div className="">
      {type === "Icon" ? (
        <button
          className={
            isFloatingActionBtn
              ? `Button--${type} floating-action-btn Button`
              : `Button--${type} Button`
          }
        >
          <img
            src={iconSrc}
            alt="button-icon"
            style={{ height: "15px", width: "15px" }}
          />
        </button>
      ) : (
        <button className={`Button--${type} Button`}>{`${type} Button`}</button>
      )}
    </div>
  );
}

export default Button;
