import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isEditor: true,
};

export const commonSlice = createSlice({
  name: "blog/common",
  initialState,
  reducers: {
    setIsEditor: (state, action) => {
      state.isEditor = action.payload;
    },
  },
});

export const { setIsEditor } = commonSlice.actions;

export default commonSlice.reducer;
