import React, { useEffect } from "react";
import "../../../Styles/Proizvodi/Proizvodi.css";

import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import Options from "./Options";
import IMAGESprofile from "../../../ImgProfile";

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
        <LineAnimation header1={"Karakteristike"} scroll={scroll} scrollY={1000} />
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
        {data.profiles ? <LineAnimation header1={"Paneli"} scroll={scroll} scrollY={1600} /> : null}
        {data.profiles ? (
          <div className="ProductPage__profiles">
            {IMAGESprofile.map((data) => {
              return (
                <div className="ProductPage__profile">
                  <img src={data} alt="img profile" />
                  <div className="ProductPage__profileInfo">
                    <h3>Profile Name: PROFIL</h3>
                    <p>
                      Profile info: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                      piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                      a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                      words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                      classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                      and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                      in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                      The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                      1.10.32.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductPage;
