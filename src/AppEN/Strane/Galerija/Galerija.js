import React from "react";
import "../../../Styles/Galerija/Galerija.css";
import GalerijaFunc from "./GalerijaFunc";
import ImgObjekti from "../../../ImgObjekti";
import ImgCover from "../../../Img/ImgProduct/ImgPageProduct/DoorImg1.jpg";

function Galerija() {
  return (
    <div className="Galerija">
      <div className="Galerija__container">
        <img src={ImgCover} alt="some img" />
        <div className="Galerija__objekti">
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Object Name: Object1</h1>
              <p>Location: Location</p>
            </div>
            <GalerijaFunc className="GalerijaFunc" ImgObjekti={ImgObjekti.objekat1} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Object Name: Object2</h1>
              <p>Location: Location</p>
            </div>
            <GalerijaFunc className="GalerijaFunc" ImgObjekti={ImgObjekti.objekat2} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Object Name: Object3</h1>
              <p>Location: Location</p>
            </div>
            <GalerijaFunc className="GalerijaFunc" ImgObjekti={ImgObjekti.objekat3} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Object Name: Object4</h1>
              <p>Location: Location</p>
            </div>
            <GalerijaFunc className="GalerijaFunc" ImgObjekti={ImgObjekti.objekat4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galerija;
