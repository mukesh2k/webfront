import {
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
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

export const productDetailReducers = (
  state = { product: {}, loading: false },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { product: action.payload, loading: false };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
