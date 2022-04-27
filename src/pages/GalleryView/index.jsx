import React, { Fragment, useEffect, useState } from "react";
import { Gallery, Button, ImageModal } from "components";
import { useSelector, useDispatch } from "react-redux";
import {
  getImagesAction,
  likeAction,
  selectImage,
} from "actions/imagesActions";
const GalleryView = () => {
  const { imagesData, imageSelected } = useSelector((state) => state.images);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onLiked = (id) => {
    dispatch(likeAction(id));
  };

  const openImage = (image) => {
    dispatch(selectImage(image));
    setIsModalOpen(true);
  };
  useEffect(() => {
    const getImages = () => dispatch(getImagesAction());
    getImages();
  }, []);
  return (
    <Fragment>
      {/* <Button>Photos your liked</Button> */}
      {isModalOpen && (
        <ImageModal
          imageData={imagesData[imageSelected]}
          onLiked={onLiked}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <Gallery
        imagesData={imagesData}
        openImage={openImage}
        onLiked={onLiked}
      />
    </Fragment>
  );
};

export default GalleryView;
