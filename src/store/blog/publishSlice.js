import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  banner: "",
  title: "",
  content: {},
};

export const publishSlice = createSlice({
  name: "blog/publish",
  initialState,
  reducers: {
    setBlog: (_, action) => action.payload,
  },
});

export const { setBlog } = publishSlice.actions;

export default publishSlice.reducer;
