import React from "react";
import "./Buttons.css";
export default function Buttons() {
  return (
    <div>
      <div className="container">
        <div className="popup">
          <div className="popup-content">
            <h2 className="popup-title">Awesome!</h2>
            <p className="popup-body">
              Original Codepen By Katia De Juan!
              <br /> Try Hovering The Button.
            </p>
            <a href="#0" className="popup-button">
              Hover me
            </a>
            <a href="#0" id="btn-2" className="popup-button">
              Hover me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
