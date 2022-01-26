import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/NavProducts/NavProducs.css";
import ButtonNavLeft from "../../../Komponente/ButtonNavLeft/ButtonNavLeft";
import { ProductData } from "../../../ProductData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Importovanje naziva svih proizvoda iz ProductNames
import PRODUCTS from "./ProductNames";
// Importovanje slika svih proizvoda iz ProductImg
import IMAGES from "./ProductImg";

function NavProducts({ navRightOpen, setPathTo, setPageName, setData }) {
  const initialButtonsState = [
    PRODUCTS.prozori,
    PRODUCTS.vrata,
    PRODUCTS.roletne,
    PRODUCTS.fasade,
    PRODUCTS.klizniSistemi,
    PRODUCTS.dodatno,
  ];
  const initialImgState = [
    IMAGES.windowImg,
    IMAGES.doorsImg,
    IMAGES.roletneImg,
    IMAGES.fasadeImg,
    IMAGES.teraseImg,
    IMAGES.dodatnoImg,
  ];

  const [selected, setSelected] = useState("");
  const [buttons, setButtons] = useState([
    PRODUCTS.prozori,
    PRODUCTS.vrata,
    PRODUCTS.roletne,
    PRODUCTS.fasade,
    PRODUCTS.klizniSistemi,
    PRODUCTS.dodatno,
  ]);
  const [img, setImg] = useState([
    IMAGES.windowImg,
    IMAGES.doorsImg,
    IMAGES.roletneImg,
    IMAGES.fasadeImg,
    IMAGES.teraseImg,
    IMAGES.dodatnoImg,
  ]);
  const [imgClass, setImgClass] = useState("");

  useEffect(() => {
    // -----------> 2. Stepenik

    // Prozori
    if (selected === PRODUCTS.prozori) {
      setButtons([PRODUCTS.pvcProzori, PRODUCTS.drvoAluminiumProzori, PRODUCTS.aluminiumProzori]);
      setImg([IMAGES.windowPvcImg, IMAGES.windowWoodAluminiumImg, IMAGES.windowAluminiumImg]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Vrata
    if (selected === PRODUCTS.vrata) {
      setButtons([PRODUCTS.pvcVrata, PRODUCTS.aluminiumVrata, PRODUCTS.sigurnosnaVrata]);
      setImg([IMAGES.doorPvcImg, IMAGES.doorAluminiumImg, IMAGES.doorSafeImg]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Roletne
    if (selected === PRODUCTS.roletne) {
      setButtons([PRODUCTS.pvcRoletne, PRODUCTS.aluminiumRoletne]);
      setImg([IMAGES.roletnePVCImg, IMAGES.roletneAluminiumImg]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Fasade
    if (selected === PRODUCTS.fasade) {
      setButtons([
        PRODUCTS.fundermaxFasade,
        PRODUCTS.ventilisaneAlucobondFasade,
        PRODUCTS.stakleneFasade,
        PRODUCTS.granitFasade,
      ]);
      setImg([IMAGES.fasadePVC, IMAGES.fasadeALUMINIUM, IMAGES.fasadePVC, IMAGES.fasadeALUMINIUM]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Terasni Sistemi
    if (selected === PRODUCTS.klizniSistemi) {
      setButtons([PRODUCTS.podnoKlizni, PRODUCTS.uskocnoKlizni, PRODUCTS.acordianHarmonika]);
      setImg([IMAGES.terasePVC, IMAGES.teraseDRVO, IMAGES.teraseALUMINIUM]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Dodatno
    if (selected === PRODUCTS.dodatno) {
      setButtons([PRODUCTS.dodatno]);
      setImg([IMAGES.dodatnoImg]);
      setImgClass("ButtonNavLeftTopImg");
    }

    // -----------> 3. Stepenik

    // Prozori
    if (selected === PRODUCTS.pvcProzori) {
      setButtons([PRODUCTS.allProducts.pvcProzor1, PRODUCTS.allProducts.pvcProzor2]);
      setImg("");
    }

    if (selected === PRODUCTS.drvoAluminiumProzori) {
      setButtons([PRODUCTS.allProducts.drvoAluminiumProzor1]);
      setImg("");
    }
    if (selected === PRODUCTS.aluminiumProzori) {
      setButtons([
        PRODUCTS.allProducts.aluminiumProzor1,
        PRODUCTS.allProducts.aluminiumProzor2,
        PRODUCTS.allProducts.aluminiumProzor3,
        PRODUCTS.allProducts.aluminiumProzor4,
      ]);
      setImg("");
    }
    // Vrata
    if (selected === PRODUCTS.pvcVrata) {
      setButtons([PRODUCTS.allProducts.ulaznaVrata, PRODUCTS.allProducts.pregradnaVrata]);
      setImg("");
    }
    if (selected === PRODUCTS.aluminiumVrata) {
      setButtons([
        PRODUCTS.allProducts.vrataHladanProfil,
        PRODUCTS.allProducts.vrataProfilTermo,
        PRODUCTS.allProducts.vrataSkrivenoKrilo,
      ]);
      setImg("");
    }
    if (selected === PRODUCTS.sigurnosnaVrata) {
      setButtons([PRODUCTS.allProducts.celicnaVrata]);
      setImg("");
    }
    // Roletne
    if (selected === PRODUCTS.pvcRoletne) {
      setButtons(["PVC ROLETNE 1", "PVC ROLETNE 2"]);
      setImg("");
    }
    if (selected === PRODUCTS.aluminiumRoletne) {
      setButtons([
        PRODUCTS.allProducts.spoljneRoletne,
        PRODUCTS.allProducts.unutrasnjeRoletne,
        PRODUCTS.allProducts.podvasadneRoletne,
      ]);
      setImg("");
    }

    // Fasade
    if (selected === PRODUCTS.fundermaxFasade) {
      setButtons([PRODUCTS.allProducts.FunderFasade]);
      setImg("");
    }
    if (selected === PRODUCTS.ventilisaneAlucobondFasade) {
      setButtons([PRODUCTS.allProducts.VentilFasade]);
      setImg("");
    }
    if (selected === PRODUCTS.stakleneFasade) {
      setButtons([PRODUCTS.allProducts.strukovna, PRODUCTS.allProducts.standardna]);
      setImg("");
    }
    if (selected === PRODUCTS.granitFasade) {
      setButtons([PRODUCTS.allProducts.granit]);
      setImg("");
    }

    // Terasni Sistemi
    if (selected === PRODUCTS.podnoKlizni) {
      setButtons([PRODUCTS.allProducts.pvcVekaSlide, PRODUCTS.allProducts.aluUltraGlide]);
      setImg("");
    }
    if (selected === PRODUCTS.uskocnoKlizni) {
      setButtons([PRODUCTS.allProducts.pvcVekaSoft, PRODUCTS.allProducts.aluVisoglide]);
      setImg("");
    }
    if (selected === PRODUCTS.acordianHarmonika) {
      setButtons([
        PRODUCTS.allProducts.pvcSmatiaM9800,
        PRODUCTS.allProducts.pvcSmatiaM1980,
        PRODUCTS.allProducts.panoramaAliplast,
      ]);
      setImg("");
    }
  }, [selected]);

  const backHandler = () => {
    setButtons(initialButtonsState);
    setImg(initialImgState);
    setSelected(false);
    setImgClass("");
  };

  const setProductPath = (value) => {
    const newData = ProductData.filter((product) => {
      return product.name === value;
    });
    setData(...newData);
    Object.values(PRODUCTS.allProducts).forEach((product) => {
      if (product === value) {
        setPathTo(`/EN/${product}`);
        setPageName(value);
      } else return "";
    });
  };
  return (
    <div className={navRightOpen ? "Nav__productsVisible" : "Nav__productsHiden"}>
      {selected ? (
        <div className="Nav__productsSelected">
          <ArrowBackIosIcon onClick={backHandler} sx={{ fontSize: 35 }} />
          <p>{selected}</p>
        </div>
      ) : (
        <div className="Nav__searchContainer">
          <div className="Nav__search">
            <ArrowDownwardIcon />
            <p>Select Product</p>
          </div>
        </div>
      )}
      <div className="Nav__productsContainer">
        {buttons.map((but, i) => {
          return (
            <Link
              to={`/EN/${Object.values(PRODUCTS.allProducts).filter((product) => {
                if (product === but) {
                  return but;
                } else return "";
              })}`}
              onClick={() => setProductPath(but, ProductData[i])}
            >
              <ButtonNavLeft
                imgClass={imgClass}
                img={img[i]}
                selected={selected}
                setSelected={setSelected}
                buttonName={but}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavProducts;
