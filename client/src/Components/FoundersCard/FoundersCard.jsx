import React, { useState } from "react";
import "./FoundersCard.css";

export default function FoundersCard(props) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="FoundersCard">
      <div className="founder-section-1" onClick={handleClick}>
        <div
          className="founders-image"
          style={{ backgroundImage: `url("${props.imageLink}")` }}
        />
        <h2>{props.nom}</h2>
        <p>{props.profession}</p>
      </div>
      {props.description && (
        <div className="founder-description">
          {toggle && <p>{props.description()}</p>}
        </div>
      )}
    </div>
  );
}
