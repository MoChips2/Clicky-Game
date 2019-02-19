import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="images" onClick={() => props.clickedPlayer(props.id)}>
      <img alt={props.name} src={props.image} className="img-thumbnail img-fluid float-center point"/>
    </div>
  )
}

export default PlayerCard;