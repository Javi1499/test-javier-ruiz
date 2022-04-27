import React from "react";
import "./style.scss";
import { ImageCard } from "components";

const Gallery = ({ imagesData, openImage, onLiked }) => {
  const imagesToShow = imagesData.map((image, index) => (
    <ImageCard
      key={`image-i${index}`}
      imageData={image}
      onLiked={onLiked}
      onClick={() => openImage(index)}
    />
  ));
  return (
    <div className="container">
      <div className="gallery">{imagesToShow}</div>
    </div>
  );
};

export default Gallery;
