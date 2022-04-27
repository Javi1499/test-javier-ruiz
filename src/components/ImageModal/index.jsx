import React from "react";
import { Image } from "components";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";

const ImageModal = ({ imageData, onLiked, setIsModalOpen }) => {
  const { title, description, source, liked, id } = imageData;

  return (
    <div className="wrapper">
      <div className="modal">
        <FontAwesomeIcon
          onClick={() => setIsModalOpen(false)}
          className={`modal__icon modal__icon--close`}
          icon={faXmark}
        />
        <div className="modal__image">
          <Image url={source} alt={description} />
        </div>
        <div className="modal__info">
          <p className="modal__text modal__text--title">{title}</p>
          <p className="modal__text">{description}</p>
        </div>
        <FontAwesomeIcon
          onClick={() => onLiked(id)}
          className={`modal__icon ${liked ? "modal__icon--liked" : ""}`}
          icon={faHeart}
        />
      </div>
    </div>
  );
};

export default ImageModal;
