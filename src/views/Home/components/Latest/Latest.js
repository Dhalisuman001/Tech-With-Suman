import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { apiGetLatestBlog } from "services/BlogService";
import { Loading } from "components/shared";

const Latest = () => {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlog = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiGetLatestBlog();
      setBlog(data.payload);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return <div>{isLoading ? <Loading /> : <BlogCard />}</div>;
};

export default Latest;
