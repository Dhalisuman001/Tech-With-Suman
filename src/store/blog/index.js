import { combineReducers } from "@reduxjs/toolkit";
import publish from "./publishSlice";
import common from "./commonSlice";

const reducer = combineReducers({
  blog: publish,
  common,
});

export default reducer;
