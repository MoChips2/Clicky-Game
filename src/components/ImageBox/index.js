import React from "react";

function ImageBox(props) {
  return (
    <div className="container">
      <div className="row">

          {props.children}

      </div>
    </div>
  )
}

export default ImageBox;