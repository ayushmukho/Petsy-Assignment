import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { productReducer } from "./products";
import { SingleProductReducer } from "./product";

export const reducers = combineReducers({
  user: authReducer,
  getAllProductsByCategory: productReducer,
  singleProductReducer:SingleProductReducer
});
