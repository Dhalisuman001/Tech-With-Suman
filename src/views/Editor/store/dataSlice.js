import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  banner: "",
  title: "",
  content: {},
  tags: [],
  des: "",
  author: { personal_info: {} },
  draft: false,
};

export const publishSlice = createSlice({
  name: "editor/action",
  initialState,
  reducers: {
    setBlog: (_, action) => action.payload,
    setInitial: () => initialState,
  },
});

export const { setBlog, setInitial } = publishSlice.actions;

export default publishSlice.reducer;
