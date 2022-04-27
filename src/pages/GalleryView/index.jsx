import React, { Fragment, useEffect, useState, useRef } from "react";
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
  const [imagesToShow, setimagesToShow] = useState(1);
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const addNewImage = () => {
    if (imagesToShow === imagesData.length) return;
    setimagesToShow((prev) => prev + 1);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => addNewImage(), 120000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [imagesToShow, addNewImage]);

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
        imagesData={imagesData.slice(0, imagesToShow)}
        openImage={openImage}
        onLiked={onLiked}
      />
    </Fragment>
  );
};

export default GalleryView;
