import React from "react";
import "./HorizontalCardShadow.css";

function HorizontalCardShadow() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="credit-card-bg">
        <div className="card-group">
          <div className="credit-card">
            <div className="logo">
              <img
                src="http://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png"
                alt="visa"
              />
            </div>
            <div className="chip">
              <img
                src="https://p7.hiclipart.com/preview/32/654/377/smart-card-computer-icons-integrated-circuits-chips-subscriber-identity-module-font-credit-card.jpg"
                alt="chip"
              />
            </div>
            <div className="number">1234 5678 9012 3456</div>
            <div className="name">SHOUNAK DAS</div>
            <div className="from">10/19</div>
            <div className="to">06/21</div>
          </div>
        </div>
      </div>
      <h4>Horizontal Card With Shadow</h4>
    </div>
  );
}

export default HorizontalCardShadow;
