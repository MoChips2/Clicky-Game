import React from "react";
import React from "./style.css"

function Footer(props) {
  return (
    <footer className= "footer">
      <div className= "container">
        {props.children}
      </div>
    </footer>
  )
}

export default Footer;