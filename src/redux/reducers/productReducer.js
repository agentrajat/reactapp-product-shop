import { ActionTypes } from "../constants/action-types";

export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return payload;

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return payload;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
