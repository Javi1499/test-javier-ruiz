import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  LIKE_PHOTO,
  SELECT_IMAGE,
} from "types";

const initialState = {
  imagesData: [],
  errors: null,
  loading: false,
  imageSelected: null,
};
export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        loading: true,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        imagesData: action.payload,
        loading: false,
      };
    case LIKE_PHOTO:
      return {
        ...state,
        imagesData: state.imagesData.map((image) =>
          image.id === action.payload
            ? { ...image, liked: !image.liked }
            : image
        ),
      };
    case SELECT_IMAGE:
      return {
        ...state,
        imageSelected: action.payload,
      };

    default:
      return state;
  }
}
