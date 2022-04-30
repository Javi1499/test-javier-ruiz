import React, { Fragment, useEffect, useState, useRef } from "react";
import { Gallery, Button, ImageModal, TitleHeader } from "components";
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
  const [filterImage, setFilterImage] = useState(false);

  const dispatch = useDispatch();
  const timeoutRef = useRef(null);
  const delay = 120000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const addNewImage = () => {
      setimagesToShow((prev) => prev + 1);
    };
    if (imagesToShow < imagesData.length) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => addNewImage(), delay);
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [imagesToShow, imagesData.length]);

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
  }, [dispatch]);
  return (
    <Fragment>
      {isModalOpen && (
        <ImageModal
          imageData={imagesData[imageSelected]}
          onLiked={onLiked}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <TitleHeader>Our gallery</TitleHeader>
      <Button
        submitButton={() => setFilterImage((prev) => !prev)}
        isActive={filterImage}
      >
        Photos your liked
      </Button>

      <Gallery
        imagesData={
          filterImage
            ? imagesData
                .slice(0, imagesToShow)
                .filter((image) => image.liked === true)
            : imagesData.slice(0, imagesToShow)
        }
        openImage={openImage}
        onLiked={onLiked}
      />
    </Fragment>
  );
};

export default GalleryView;
