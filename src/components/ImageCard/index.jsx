import React from "react";
import "./style.scss";
import Image from "components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const ImageCard = (props) => {
  const { title, description, source } = props;
  return (
    <div className="card">
      <div className="card__container--image">
        <Image url={source} alt={description} />
      </div>
      <div className="card__container--info">
        <p className="card__text">{title}</p>
        <FontAwesomeIcon className="card__icon" icon={faHeart} />
      </div>
    </div>
  );
};

export default ImageCard;
