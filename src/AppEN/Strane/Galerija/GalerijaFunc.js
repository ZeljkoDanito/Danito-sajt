import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function GalerijaFunc({ ImgObjekti, className }) {
  return <ReactImageGallery additionalClass={className} items={ImgObjekti} showThumbnails={false} />;
}

export default GalerijaFunc;
