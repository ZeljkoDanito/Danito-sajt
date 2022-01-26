import React from "react";
import "../../../../Styles/ProductWindow/ProductWindow.css";

function ProductWindow() {
  return (
    <div className="ProductWindow">
      <div className="ProductWindow__container">
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
            <button>Button 5</button>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-drewniane.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-aluminiowe.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/systemy-hs.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
          </div>
        </div>
      </div>
      <div className="ProductWindow__productHeaders">
        <p>Windows</p>
        <p>Doors</p>
        <p>Terrace Systems</p>
        <p>Facades</p>
      </div>
    </div>
  );
}

export default ProductWindow;
