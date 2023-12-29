import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  banner: "",
  title: "",
  content: [],
  tags: [],
  des: "",
  author: { personal_info: {} },
};

export const publishSlice = createSlice({
  name: "blog/action",
  initialState,
  reducers: {
    setBlog: (_, action) => action.payload,
  },
});

export const { setBlog } = publishSlice.actions;

export default publishSlice.reducer;
