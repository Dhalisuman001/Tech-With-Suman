import React from "react";

const authRoute = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: React.lazy(() => import("views/auth/SignIn")),
    authority: [],
  },
  {
    key: "signUp",
    path: `/sign-up`,
    component: React.lazy(() => import("views/auth/SignUp")),
    authority: [],
  },
  {
    key: "forgotPassword",
    path: `/forgot-password`,
    component: React.lazy(() => import("views/auth/ForgotPassword")),
    authority: [],
  },
  {
    key: "resetPassword",
    path: `/reset-password`,
    component: React.lazy(() => import("views/auth/ResetPassword")),
    authority: [],
  },
  //   {
  //     key: "blog",
  //     path: "blog/:blog_id",
  //     component: React.lazy(() => import("views/Blog")),
  //     authority: [],
  //   },
  //   {
  //     key: "home",
  //     path: "/home",
  //     component: React.lazy(() => import("views/Home")),
  //     authority: [],
  //   },
];

export default authRoute;
