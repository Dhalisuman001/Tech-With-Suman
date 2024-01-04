import ApiService from "./ApiService";

export async function apiCreateBlog(data) {
  return ApiService.fetchData({
    url: "/blog/create",
    method: "post",
    data,
  });
}

export async function apiSaveBlog(data) {
  return ApiService.fetchData({
    url: "/blog/draft",
    method: "post",
    data,
  });
}

export async function apiGetLatestBlog(data = 1) {
  return ApiService.fetchData({
    url: `blog/latest?page=${data}`,
    method: "get",
    data,
  });
}

export async function apiGetTrendingBlog(data) {
  return ApiService.fetchData({
    url: "blog/trending",
    method: "get",
    data,
  });
}

export async function apiGetFilterBlog(data) {
  return ApiService.fetchData({
    url: `blog/filter-blogs?tag=${data}`,
    method: "get",
    data,
  });
}
export async function apiGetBlogCount(data) {
  return ApiService.fetchData({
    url: "blog/count-blogs",
    method: "get",
    data,
  });
}
export async function apiGetBlogDetails(data) {
  return ApiService.fetchData({
    url: `blog/get-blog/${data}`,
    method: "get",
    data,
  });
}
