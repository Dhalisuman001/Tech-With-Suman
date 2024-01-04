import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetBlogDetails } from "services/BlogService";

export const fetchBlogDetails = createAsyncThunk(
  "home/fetchBlogDetails",
  async (blog_id) => {
    const response = await apiGetBlogDetails(blog_id);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "blog/data",
  initialState: {
    loading: false,
    blog: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogDetails.fulfilled, (state, action) => {
      state.blog = action.payload.payload;
      state.loading = false;
    });
  },
});

// export const { setPage } = dataSlice.actions;

export default dataSlice.reducer;
