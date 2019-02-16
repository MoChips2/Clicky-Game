import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
          <div className="images">
            <img alt={props.name} src={props.image} className="img-thumbnail img-fluid float-center" />
          </div>
  )
}

export default PlayerCard; 