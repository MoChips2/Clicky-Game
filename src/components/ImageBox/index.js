import React from "react";
import "./style.css";

function ImageBox(props) {
  return (
    <div className="container">
      <div className="row mb-3">
          {props.children}
      </div>
    </div>
  )
}

export default ImageBox;