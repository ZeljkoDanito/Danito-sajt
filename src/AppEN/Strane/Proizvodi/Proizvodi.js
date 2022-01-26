import React, { useEffect } from "react";
import "../../../Styles/Proizvodi/Proizvodi.css";

import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import Options from "./Options";

import ProfileIcon from "../../../Img/Icons/Profile.png";
import GlassIcon from "../../../Img/Icons/Glass.png";
import FittingsIcon from "../../../Img/Icons/Fittings.png";

const icons = [ProfileIcon, GlassIcon, FittingsIcon];

function ProductPage({ scroll, pageName, data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="ProductPage">
      <div className="ProductPage__container">
        <div className="ProductPage__imgContainer">
          <img src={data.imgCover} alt="danito window cover" />
        </div>
        <LineAnimation header1={pageName} scroll={scroll} scrollY={200} />
        <div className="ProductPage__videoOptionsContainer">
          <div className="ProductPage__videoContainer">
            <video autoPlay src={data.imgVideo}></video>
          </div>
          <div className="ProductPage__optionsContainer">
            <Options optionsContent={data.options} pageName={pageName} />
          </div>
        </div>
        <LineAnimation header1={"Features"} scroll={scroll} scrollY={1000} />
        <div className="ProductPage__materialContainer">
          {data.material.map((data, i) => {
            return (
              <div className="ProductPage__material">
                <img src={icons[i]} alt="profile icon" />
                <div className="ProductPage__Line"></div>
                <p>{data}</p>
              </div>
            );
          })}
        </div>
        <LineAnimation header1={"Color range"} scroll={scroll} scrollY={1600} />
      </div>
    </div>
  );
}

export default ProductPage;
