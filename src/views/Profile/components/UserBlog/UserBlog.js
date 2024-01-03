import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../BlogCard";
import { NoDataMessage, Spinner } from "components/ui";
import { getUserBlog } from "views/Profile/store/dataSlice";

const UserBlog = ({ id }) => {
  const { blog, loading } = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserBlog(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const loadMore = () => {
  //   dispatch(getLeatestBlog(page + 1));
  //   // dispatch(setPage(page + 1));
  // };
  return (
    <div className="w-full ">
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : blog?.payload?.length > 0 ? (
        <div>
          {blog?.payload?.map((blog) => (
            <div key={blog.blog_id}>
              <BlogCard content={blog} author={blog.author.personal_info} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-10 flex justify-center items-center">
          <NoDataMessage message={"No blog found related "} />
        </div>
      )}
    </div>
  );
};

export default UserBlog;
