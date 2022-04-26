import React, { useEffect } from "react";
import { data } from "api/cities-json";
import "./style.scss";
import { ImageCard } from "components";
import { useSelector, useDispatch } from "react-redux";
import { getImagesAction } from "actions/imagesActions";
const Gallery = () => {
  const { imagesData } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    const getImages = () => dispatch(getImagesAction());
    getImages();
  }, []);

  const imagesToShow = imagesData.map((e, index) => (
    <ImageCard
      key={`image-i${index}`}
      source={e.source}
      title={e.title}
      alt={e.desciption}
    />
  ));
  return (
    <div className="container">
      <div className="gallery">{imagesToShow}</div>
    </div>
  );
};

export default Gallery;
