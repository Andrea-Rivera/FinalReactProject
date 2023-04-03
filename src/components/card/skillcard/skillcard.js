import React from "react";
import "./skillcard.css";

function card(props) {
  return (
    <div className="skillcard">
      <div className="skillcard-back">
        <div>{props.skilldata.certificate}</div>
        <div className="description">{props.skilldata.description}</div>
      </div>
      <div className="skillcard-front">
        <h2 className="service_icon">{props.skilldata.icon}</h2>
        <h4>{props.skilldata.title}</h4>
      </div>
    </div>
  );
}

export default card;
