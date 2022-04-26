import { GET_IMAGES, GET_IMAGES_SUCCESS } from "types";

const initialState = {
  imagesData: [],
  errors: null,
  loading: false,
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

    default:
      return state;
  }
}
