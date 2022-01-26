import React, { useState } from "react";
import "../../../Styles/GalerijaFunc/GalerijaFunc.css";

import Backdrop from "@mui/material/Backdrop";

function GalerijaFunc({ ImgObjekti }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [imageModal, setImageModal] = useState("");

  const setModalOpenImage = (image) => {
    setImageModal(image);
    setOpen(true);
  };

  return (
    <div className="Images">
      {ImgObjekti.map((item) => {
        return (
          <img
            className="Images__rowImg"
            onClick={() => setModalOpenImage(item.original)}
            key={item.original}
            alt="objekti images"
            src={item.original}
          ></img>
        );
      })}

      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <img style={{ width: "900px" }} src={imageModal} alt="selected img"></img>
      </Backdrop>
    </div>
  );
}

export default GalerijaFunc;
