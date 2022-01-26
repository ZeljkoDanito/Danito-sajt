import React, { useState } from "react";
import "../../../../Styles/ProductWindow/ProductWindow.css";

function ProductWindow() {
  const [windowsPvc, setWindowsPvc] = useState(true);
  const [windowsWoodAluminium, setWindowsWoodAluminium] = useState(true);
  const [windowsAluminium, setWindowsAluminium] = useState(true);

  const [pvcDoors, setPvcDoors] = useState(true);
  const [aluminiumDoors, setAluminiumDoors] = useState(true);
  const [SafeDoors, setSafeDoors] = useState(true);

  const [fundermax, setFundermax] = useState(true);
  const [ventilsane, setVentilsane] = useState(true);
  const [glass, setGlass] = useState(true);
  const [granit, setGranit] = useState(true);

  const [floorSliding, setFloorSliding] = useState(true);
  const [uskocno, setUskocno] = useState(true);
  const [acordian, setAcordian] = useState(true);

  const selectProduct = (product) => {
    if (product === "windowsPvc") {
      setWindowsPvc(false);
      setWindowsWoodAluminium(true);
      setWindowsAluminium(true);
    }
    if (product === "windowsWoodAluminium") {
      setWindowsWoodAluminium(false);
      setWindowsPvc(true);
      setWindowsAluminium(true);
    }
    if (product === "windowsAluminium") {
      setWindowsWoodAluminium(true);
      setWindowsPvc(true);
      setWindowsAluminium(false);
    }
    if (product === "doorsPvc") {
      setPvcDoors(false);
      setSafeDoors(true);
      setAluminiumDoors(true);
    }
    if (product === "doorsAluminium") {
      setPvcDoors(true);
      setSafeDoors(true);
      setAluminiumDoors(false);
    }
    if (product === "safeDoors") {
      setPvcDoors(true);
      setSafeDoors(false);
      setAluminiumDoors(true);
    }

    if (product === "fundermax") {
      setFundermax(false);
      setVentilsane(true);
      setGlass(true);
      setGranit(true);
    }
    if (product === "ventilisane") {
      setFundermax(true);
      setVentilsane(false);
      setGlass(true);
      setGranit(true);
    }
    if (product === "glass") {
      setFundermax(true);
      setVentilsane(true);
      setGlass(false);
      setGranit(true);
    }
    if (product === "granit") {
      setFundermax(true);
      setVentilsane(true);
      setGlass(true);
      setGranit(false);
    }

    if (product === "podnoKlizni") {
      setFloorSliding(false);
      setUskocno(true);
      setAcordian(true);
    }
    if (product === "uskocnoKlizni") {
      setFloorSliding(true);
      setUskocno(false);
      setAcordian(true);
    }
    if (product === "acordian") {
      setFloorSliding(true);
      setUskocno(true);
      setAcordian(false);
    }
  };

  return (
    <div className="ProductWindow">
      <div className="ProductWindow__container">
        {/* 1 Polje */}
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={windowsPvc ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("windowsPvc")}>
                Pvc Prozori
              </button>
              {windowsPvc ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsPvc(true)}>Back</button> */}
                  <button>Veka 70</button>
                  <button>Veka 82</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsWoodAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsWoodAluminium")}
              >
                Aluminium Drvo Prozori
              </button>

              {windowsWoodAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>Aluminium Drvo Prozori 1</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsAluminium")}
              >
                Aluminium Prozori
              </button>

              {windowsAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>Aluminium Prozor 1</button>
                  <button>Aluminium Prozor 2</button>
                  <button>Aluminium Prozor 2</button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 2 Polje */}
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={pvcDoors ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("doorsPvc")}>
                Pvc Vrata
              </button>
              {pvcDoors ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsPvc(true)}>Back</button> */}
                  <button>ULAZNA VRATA</button>
                  <button>PREGRADNA VRATA</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={aluminiumDoors ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("doorsAluminium")}
              >
                ALUMINIUM VRATA
              </button>

              {aluminiumDoors ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>PROFIL BEZ TERMOPREKIDA</button>
                  <button>PROFIL SA TERMOPREKIDOM</button>
                  <button>VRATA SA SKRIVENIM KRILOM</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={SafeDoors ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("safeDoors")}>
                SIGURNOSNA VRATA
              </button>

              {SafeDoors ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>SIGURNOSNA VRATA PO MERI</button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 3 Polje Fasade */}
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={fundermax ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("fundermax")}>
                FUNDERMAX FASADE
              </button>
              {fundermax ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>FUNDERMAX FASADE</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={ventilsane ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("ventilisane")}
              >
                VENTILISANE ALUCOBOND FASADE
              </button>

              {ventilsane ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>VENTILISANE ALUCOBOND FASADE</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={glass ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("glass")}>
                STAKLENE FASADE
              </button>

              {glass ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>STRIKTURNA</button>
                  <button>STANDARDNA</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={granit ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("granit")}>
                GRANIT FASADE
              </button>

              {granit ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>GRANIT FASADE</button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 4 Polje */}
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button
                className={floorSliding ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("podnoKlizni")}
              >
                PODNO KLIZNI
              </button>
              {floorSliding ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>PVC - VEKA SLIDE</button>
                  <button>ALU - ULTRA GLIDE</button>
                  <button>ALU - VG PLUS</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={uskocno ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("uskocnoKlizni")}>
                USKOCNO KLIZNI
              </button>

              {uskocno ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>PVC - VEKA SOFTLINE 70/82</button>
                  <button>ALU - USKOCNO KLIZNI</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={acordian ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("acordian")}>
                HARMONIKA
              </button>

              {acordian ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <button>PVC - HARMONIKA</button>
                  <button>ALU - SMARTIA M9800</button>
                  <button>ALU - SMARTIA M19800</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ProductWindow__productHeaders">
        <p>Prozori</p>
        <p>Vrata</p>
        <p>Fasade</p>
        <p>Terasni Sistemi</p>
      </div>
    </div>
  );
}

export default ProductWindow;
