import React from "react";

function Navbar (props) {
  return (
    <div className="navbar navbar-expand-sm navbar-light bg-danger text-white p-5">
      <ul className="navbar-nav m-auto">
        <li className="nav-item mr-5">
          <h4>{props.children[0]}</h4>
        </li>
        <li className="nav-item mx-5">
          <h4>{props.children[1]}</h4>
        </li>
        <li className="nav-item ml-5">
          <h4>{props.children[2]}</h4>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;