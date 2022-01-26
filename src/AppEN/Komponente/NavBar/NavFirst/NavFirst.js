import React from "react";
import "../../../../Styles/NavFirst/NavFirst.css";
import Logo from "../../../../Img/Danito_logo.jpg";

function NavFirst() {
  return (
    <div className="NavFirst">
      <div className="Nav__header">
        <a href="/">
          <img src={Logo} alt="datito logo" />
        </a>
        <a href="/">SR</a>
      </div>
    </div>
  );
}

export default NavFirst;
