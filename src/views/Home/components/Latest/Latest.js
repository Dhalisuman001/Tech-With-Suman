import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../BlogCard";
import { NoDataMessage, Spinner } from "components/ui";
import { getLeatestBlog, setPage } from "views/Home/store/dataSlice";

const Latest = () => {
  const {
    data: { latestBlogs, loading, page, blogCount },
    state: { activeTag },
  } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(getLeatestBlog(page + 1));
    dispatch(setPage(page + 1));
  };
  return (
    <div className="w-full ">
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : latestBlogs?.payload?.length > 0 ? (
        <div>
          {latestBlogs?.payload?.map((blog) => (
            <div key={blog.blog_id}>
              <BlogCard content={blog} author={blog.author.personal_info} />
            </div>
          ))}
          {blogCount > latestBlogs.payload.length && (
            <button
              className="text-gray-900 p-2 px-3 hover:bg-gray-200 rounded-md flex items-center gap-2"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
      ) : (
        <div className="w-full mt-10 flex justify-center items-center">
          <NoDataMessage message={` No blog found related ${activeTag}`} />
        </div>
      )}
    </div>
  );
};

export default Latest;
