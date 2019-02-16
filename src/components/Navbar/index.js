import React from "react";

function Navbar (props) {
  return (
    <div className="navbar navbar-light bg-light">
      <ul>
        <li>
          {props.children[0]}
        </li>
        <li>
          {props.children[1]}
        </li>
        <li>
          {props.children[2]}
        </li>
      </ul>
    </div>
  )
}

export default Navbar;