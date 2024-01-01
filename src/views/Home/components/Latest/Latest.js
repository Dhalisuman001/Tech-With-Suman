import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import BlogCard from "../BlogCard";
import { NoDataMessage, Spinner } from "components/ui";

const Latest = () => {
  const {
    data: { latestBlogs, loading },
    state: { activeTag },
  } = useSelector((state) => state.home);
  return (
    <div className="w-full ">
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : latestBlogs?.payload?.length > 0 ? (
        latestBlogs?.payload?.map((blog) => (
          <div key={blog.blog_id}>
            <BlogCard content={blog} author={blog.author.personal_info} />
          </div>
        ))
      ) : (
        <div className="w-full mt-10 flex justify-center items-center">
          <NoDataMessage message={` No blog found related ${activeTag}`} />
        </div>
      )}
    </div>
  );
};

export default Latest;
