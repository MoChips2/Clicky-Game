import React from "react";

function Navbar (props) {

  return (
    <div className="navbar sticky-top navbar-expand-sm navbar-light bg-danger text-white p-4">
      <ul className="navbar-nav m-auto">
        <li className="nav-item mr-5">
          <h4><a href="/" className="text-white">NFL Click Game!</a></h4>
        </li>
        <li className="nav-item mx-5">
          <h4>{props.response}</h4>
        </li>
        <li className="nav-item ml-5">
          <h4>Score: {props.currentScore}</h4>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;