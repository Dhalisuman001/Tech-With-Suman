import React from "react";
// import BlogCard from "../BlogCard";
import { Loading } from "components/shared";
import { useSelector } from "react-redux";
import BlogCard from "../BlogCard";

const Latest = () => {
  const {
    data: { blogs, loading },
  } = useSelector((state) => state.home);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        blogs?.payload?.map((blog) => (
          <div key={blog.blog_id}>
            <BlogCard content={blog} author={blog.author.personal_info} />
          </div>
        ))
      )}
    </div>
  );
};

export default Latest;
