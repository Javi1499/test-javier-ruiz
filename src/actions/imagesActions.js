import axiosClient from "config/server";
import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  LIKE_PHOTO,
  SELECT_IMAGE,
} from "types";

export const getImagesAction = () => {
  return async (dispatch) => {
    dispatch(getImages());
    try {
      const res = await axiosClient.get("/images");
      dispatch(getImagesSuccess(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const getImages = () => ({ type: GET_IMAGES });
const getImagesSuccess = (images) => ({
  type: GET_IMAGES_SUCCESS,
  payload: images,
});

export const likeAction = (image) => {
  return async (dispatch) => {
    const updateImage = {
      ...image,
      liked: !image.liked,
    };
    try {
      await axiosClient.put(`/images/${image.id}`, updateImage);
      dispatch(likeFunction(image.id));
    } catch (error) {}
  };
};

const likeFunction = (id) => ({ type: LIKE_PHOTO, payload: id });

export const selectImage = (image) => ({ type: SELECT_IMAGE, payload: image });
