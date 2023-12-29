import { combineReducers } from "@reduxjs/toolkit";
import publishSlice from "./publishSlice";

const reducer = combineReducers({
  publishSlice,
});

export default reducer;
