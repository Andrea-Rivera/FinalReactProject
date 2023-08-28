import React from "react";
import "./skillcard.css";

function SkillCard(props) {
  return (
    <div className="skillcard">
      <div className="skillcard-back">
        <div>{props.SkillData.certificate}</div>
        <div className="description">{props.SkillData.description}</div>
      </div>
      <div className="skillcard-front">
        <h2 className="service_icon">{props.SkillData.icon}</h2>
        <h4>{props.SkillData.title}</h4>
      </div>
    </div>
  );
}

export default SkillCard;