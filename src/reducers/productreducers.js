import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productconstants";

export const productListReducers = (
  state = { pro: [], isLoad: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { isLoad: true };
    case PRODUCT_LIST_SUCCESS:
      return { isLoad: false, pro: action.payload };
    case PRODUCT_LIST_FAIL:
      return { isLoad: false, iserr: action.payload };
    default:
      return state;
  }
};
