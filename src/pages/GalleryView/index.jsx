import React, { Fragment, useEffect, useState } from "react";
import { Gallery, Button, ImageModal } from "components";
import { useSelector, useDispatch } from "react-redux";
import { getImagesAction, likeAction } from "actions/imagesActions";
const GalleryView = () => {
  const { imagesData } = useSelector((state) => state.images);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      {/* <Button>Photos your liked</Button> */}

      <Gallery />
    </Fragment>
  );
};

export default GalleryView;
