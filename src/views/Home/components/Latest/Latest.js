import React from "react";
// import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import BlogCard from "../BlogCard";
// import { Spinner } from "components/ui";

const Latest = () => {
  const {
    data: { latestBlogs, loading },
  } = useSelector((state) => state.home);
  return (
    <div className="w-full h-full">
      {loading
        ? // <div className="w-full h-full flex justify-center items-center">
          //   <Spinner size={70} indicator={ImSpinner9} />
          // </div>
          null
        : latestBlogs?.payload?.map((blog) => (
            <div key={blog.blog_id}>
              <BlogCard content={blog} author={blog.author.personal_info} />
            </div>
          ))}
    </div>
  );
};

export default Latest;
