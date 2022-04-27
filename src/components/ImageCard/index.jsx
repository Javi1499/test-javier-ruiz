import React from "react";
import "./style.scss";
import Image from "components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const ImageCard = ({ imageData, onLiked, onClick }) => {
  const { title, description, source, liked, id } = imageData;
  return (
    <div className="card">
      <div className="card__container--image" onClick={onClick}>
        <Image url={source} alt={description} />
      </div>
      <div className="card__container--info">
        <p className="card__text" onClick={onClick}>
          {title}
        </p>
        <FontAwesomeIcon
          onClick={() => onLiked(id)}
          className={`card__icon ${liked ? "card__icon--liked" : ""}`}
          icon={faHeart}
        />
      </div>
    </div>
  );
};

export default ImageCard;
