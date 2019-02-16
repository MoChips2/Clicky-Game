import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="container">
      <div className="images">
        <img alt={props.name} src={props.image} className="img-thumbnail float-left" />
      </div>
    </div>
  )
}

export default PlayerCard;