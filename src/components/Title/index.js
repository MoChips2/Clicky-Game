import React from "react";

function Title (props) {
  return (
    <div className="jumbotron">
      <h1 className="Title text-center">{props.children}</h1>
      <h3 className="Disc text-center">{props.children}</h3>
    </div>
  )
}

export default Title;