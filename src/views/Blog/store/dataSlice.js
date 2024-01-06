import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetBlogDetails, apiGetFilterBlog } from "services/BlogService";

export const fetchBlogDetails = createAsyncThunk(
  "blog/fetchBlogDetails",
  async (blog_id) => {
    const response = await apiGetBlogDetails(blog_id);
    return response.data;
  }
);

export const getSimilarBlog = createAsyncThunk(
  "blog/getSimilarBlog",
  async (blog_id) => {
    const response = await apiGetFilterBlog(blog_id);
    // console.log(/response.data);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "blog/data",
  initialState: {
    loading: false,
    blog: {},
    similarLoading: false,
    similarBlog: [],
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
    builder.addCase(getSimilarBlog.pending, (state, action) => {
      state.similarLoading = true;
    });
    builder.addCase(getSimilarBlog.fulfilled, (state, action) => {
      // console.log(action);
      state.similarBlog = action.payload.payload;
      state.similarLoading = false;
    });
  },
});

// export const { setPage } = dataSlice.actions;

export default dataSlice.reducer;
