import React from "react";
import authRoute from "./authRoute";

export const publicRoutes = [...authRoute];

export const protectedRoutes = [
  {
    key: "home",
    path: "/home",
    component: React.lazy(() => import("views/Home")),
    authority: [],
  },
  {
    key: "blog.editor",
    path: "/blog-editor",
    component: React.lazy(() => import("views/Editor")),
    authority: [],
  },
  {
    key: "profile",
    path: "user/:id",
    component: React.lazy(() => import("views/Profile")),
    authority: [],
  },
];
