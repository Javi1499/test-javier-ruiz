import React from "react";
import { data } from "api/cities-json";
import "./style.scss";
import { ImageCard } from "components";
const Gallery = () => {
  const imagesToShow = data.map((e) => (
    <ImageCard source={e.source} title={e.title} alt={e.desciption} />
  ));
  return (
    <div className="container">
      <div className="gallery">{imagesToShow}</div>
    </div>
  );
};

export default Gallery;
