import React from "react";
import "../../../Styles/Kontakt/Kontakt.css";
import kontaktImg from "../../../Img/kontakt/kontakt.jpg";
import Logo from "../../../Img/Danito_logo.jpg";
import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";

import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LanguageIcon from "@mui/icons-material/Language";

function Kontakt({ scroll }) {
  return (
    <div className="Kontakt">
      <div className="Kontakt__container">
        <img src={kontaktImg} alt="kontakt cover img" />
        <LineAnimation header1={"Kontakt"} scroll={scroll} scrollY={200} />
        <div className="Kontakt__info">
          <div className="Kontakt__infoLogo">
            <img src={Logo} alt="datito logo" />
          </div>
          <div className="Kontakt__infoContainer">
            <div className="Kontakt__phoneEmail">
              <div className="Kontakt__icon">
                <RoomIcon />
                <h3>Adresa:</h3>
              </div>
              <p>Žarka Zrenjanina 114, 26000 Pančevo</p>
            </div>
            <div className="Kontakt__phoneEmail">
              <div className="Kontakt__icon">
                <LocalPhoneIcon />
                <h3>Tel:</h3>
              </div>
              <p>013 367 700</p>
            </div>
            <div className="Kontakt__phoneEmail">
              <div className="Kontakt__icon">
                <MailIcon />
                <h3>Mail:</h3>
              </div>
              <p>office@danito.rs</p>
            </div>
            <div className="Kontakt__phoneEmail">
              <div className="Kontakt__icon">
                <LanguageIcon />
                <h3>www:</h3>
              </div>
              <p>https://www.danito.rs</p>
            </div>
          </div>
          <div className="Kontakt__radnoVreme">
            <h2>Working Hours</h2>
            <div className="Kontakt__radnoVremeConatiner">
              <dvi className="Kontakt__radnoVremeDays">
                <p>Monday:</p>
                <p>08:00 - 17:00</p>
              </dvi>
              <dvi className="Kontakt__radnoVremeDays">
                <p>Tuesday:</p>
                <p>08:00 - 17:00</p>
              </dvi>
              <dvi className="Kontakt__radnoVremeDays">
                <p>Wednesday:</p>
                <p>08:00 - 17:00</p>
              </dvi>
              <dvi className="Kontakt__radnoVremeDays">
                <p>Thursday:</p>
                <p>08:00 - 17:00</p>
              </dvi>
              <dvi className="Kontakt__radnoVremeDays">
                <p>Thursday:</p>
                <p>08:00 - 17:00</p>
              </dvi>
              <dvi className="Kontakt__radnoVremeDays">
                <p>Saturday:</p>
                <p>09:00 - 13:00</p>
              </dvi>
              <dvi className="Kontakt__radnoVremeDays">
                <p>Sunday:</p>
                <p>closed</p>
              </dvi>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
