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

export async function apiGetLatestBlog(data) {
  return ApiService.fetchData({
    url: "blog/latest",
    method: "get",
    data,
  });
}

// export async function apiForgotPassword(data) {
//   return ApiService.fetchData({
//     url: "/forgot-password",
//     method: "post",
//     data,
//   });
// }

// export async function apiResetPassword(data) {
//   return ApiService.fetchData({
//     url: "/reset-password",
//     method: "post",
//     data,
//   });
// }
