import React from "react";
import "../../../../Styles/NavSecond/NavSecond.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NavSecond({ setNavRightOpen, navRightOpen }) {
  return (
    <div className="NavSecond">
      <div className="Nav__body">
        <div className="Nav__bodyMenu">
          {navRightOpen ? (
            <ArrowBackIosIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
          ) : (
            <MenuIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
          )}

          <button onClick={() => setNavRightOpen(!navRightOpen)}>PRODUCT</button>

          <a href="/#">ABOUT</a>
          <Link to="/EN/galerija"> GALLERY</Link>
          <Link to="/EN/contact">CONTACT</Link>
        </div>
        <SearchIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
      </div>
    </div>
  );
}

export default NavSecond;
