import { Spinner } from "components/ui";
import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
// import { apiGetFilterBlog } from "services/BlogService";
import { getSimilarBlog } from "views/Blog/store/dataSlice";
import BlogCard from "views/Home/components/BlogCard";

const SimilarBlog = ({ tag }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (tag) {
      dispatch(getSimilarBlog(tag));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);
  const {
    data: { similarBlog, similarLoading: loading },
  } = useSelector((state) => state.blog);

  return (
    <div className="w-full ">
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : (
        <div>
          {similarBlog?.map((blog) => (
            <div key={blog.blog_id}>
              <BlogCard content={blog} author={blog.author.personal_info} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimilarBlog;
