import React from "react";
import "./style.scss";
import Image from "components/Image";
import { data } from "api/cities-json";
const ImageCard = () => {
  const { title, description, source, liked } = data[0];
  return (
    <div className="card">
      <div className="card__container--image">
        <Image url={source} alt={description} />
      </div>
      <div className="card__container--info">
        <p className="card__text">{title}</p>
        <i class="fa-light fa-heart card__icon"></i>
        {/* <i class="fa-solid fa-heart"></i> */}
      </div>
    </div>
  );
};

export default ImageCard;
