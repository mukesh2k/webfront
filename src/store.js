import data from "./data";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import {
  productListReducers,
  productDetailReducers,
} from "./reducers/productreducers";
const initialState = {};
const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
