import React from "react";
import "../../../../Styles/Inspiration/Inspiration.css";

function Inspiration() {
  return (
    <div className="Inspiration">
      <div className="Inspiration__container">
        <div className="Inspiration__containerImg">
          <img
            src="https://www.drutex.eu/media/_upload/galeria_inspiracje/kategorie/inspiracje-13.jpg"
            alt="danito img"
          />
          <p>Windows</p>
          <div></div>
        </div>
        <div className="Inspiration__containerImg">
          <img
            src="https://www.drutex.eu/media/_upload/galeria_inspiracje/kategorie/inspiracje-5.jpg"
            alt="danito img"
          />
          <p>Doors</p>
          <div></div>
        </div>
        <div className="Inspiration__containerImg">
          <img
            src="https://www.drutex.eu/media/_upload/galeria_inspiracje/kategorie/inspiracje-4.jpg"
            alt="danito img"
          />
          <p>Terrace Systems</p>
          <div></div>
        </div>
        <div className="Inspiration__containerImg">
          <img
            src="https://www.drutex.eu/media/_upload/galeria_inspiracje/kategorie/inspiracje-3.jpg"
            alt="danito img"
          />
          <p>Facades</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
