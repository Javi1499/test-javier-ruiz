import React, { useEffect, useState } from "react";
import "./style.scss";
import { ImageCard, ImageModal } from "components";
import { useSelector, useDispatch } from "react-redux";
import { getImagesAction, likeAction } from "actions/imagesActions";
const Gallery = () => {
  const { imagesData } = useSelector((state) => state.images);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(0);
  const dispatch = useDispatch();

  const onLiked = (id) => {
    dispatch(likeAction(id));
  };
  useEffect(() => {
    const getImages = () => dispatch(getImagesAction());
    getImages();
  }, []);
  const openImageSelected = (image) => {
    setImageSelected(image);
    setIsModalOpen(true);
  };
  const imagesToShow = imagesData.map((e, index) => (
    <ImageCard
      key={`image-i${index}`}
      imageData={e}
      onLiked={onLiked}
      onClick={() => openImageSelected(index)}
    />
  ));
  return (
    <div className="container">
      {isModalOpen && (
        <ImageModal
          imageData={imagesData[imageSelected]}
          onLiked={onLiked}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div className="gallery">{imagesToShow}</div>
    </div>
  );
};

export default Gallery;
