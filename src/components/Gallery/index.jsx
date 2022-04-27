import React, { useEffect } from "react";
import "./style.scss";
import { ImageCard } from "components";
import { useSelector, useDispatch } from "react-redux";
import { getImagesAction, likeAction } from "actions/imagesActions";
const Gallery = () => {
  const { imagesData } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const onLiked = (id) => {
    dispatch(likeAction(id));
  };
  useEffect(() => {
    const getImages = () => dispatch(getImagesAction());
    getImages();
  }, []);

  const imagesToShow = imagesData.map((e, index) => (
    <ImageCard key={`image-i${index}`} imageData={e} onLiked={onLiked} />
  ));
  return (
    <div className="container">
      <div className="gallery">{imagesToShow}</div>
    </div>
  );
};

export default Gallery;
