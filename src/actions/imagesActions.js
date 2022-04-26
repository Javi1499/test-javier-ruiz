import axiosClient from "config/server";
import { GET_IMAGES, GET_IMAGES_SUCCESS } from "types";

export const getImagesAction = () => {
  return async (dispatch) => {
    dispatch(getImages());
    try {
      const res = await axiosClient.get("/images");
      console.log(res.data);
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
