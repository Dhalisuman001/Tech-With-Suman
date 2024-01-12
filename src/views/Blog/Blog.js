import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { injectReducer } from "store";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogDetails, getBlogLike } from "./store/dataSlice";
import { ImSpinner9 } from "react-icons/im";
import { Avatar, GoToSignIn, Spinner } from "components/ui";
import Moment from "react-moment";
import BlogInteraction from "./components/BlogInteraction";
import Content from "./components/Content";
// import SimilarBlog from "./components/SimilarBlog";

injectReducer("blog", reducer);

const Blog = () => {
  const { blog_id } = useParams();
  const dispatch = useDispatch();
  const {
    data: { blog, loading },
  } = useSelector((state) => state.blog);
  const { signedIn } = useSelector((state) => state.auth.session);
  // console.log(blog);

  useEffect(() => {
    dispatch(fetchBlogDetails(blog_id));
    if (signedIn) {
      console.log("Calling");
      dispatch(getBlogLike(blog_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog_id]);

  return (
    <>
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : (
        <div className="max-w-[900px] items-center py-2 max-lg:px-[5vw]">
          <img
            src={blog?.banner}
            alt="banner"
            className="aspect-video rounded-md"
          />
          <div className="mt-8">
            <p className="text-2xl text-gray-800">{blog?.title}</p>
            <div className="flex  flex-col md:flex-row justify-between my-6">
              <div className=" flex gap-5 items-start">
                <Avatar
                  size={30}
                  src={blog.author?.personal_info?.profile_img}
                  shape="circle"
                />
                <p className="capitalize text-gray-800">
                  {blog.author?.personal_info?.fullname} <br />{" "}
                  <Link
                    to={`/user/${blog.author?.personal_info?.username}`}
                    className="hover:underline"
                  >
                    @{blog.author?.personal_info?.username}
                  </Link>
                </p>
              </div>
              <p className=" my-2 text-sm">
                Published on{" "}
                <Moment format="D MMM " withTitle>
                  {blog?.publishedAt}
                </Moment>
              </p>
            </div>
          </div>

          <BlogInteraction />

          <Content content={blog?.content?.blocks} />

          <BlogInteraction />
          {/* Don't forget to enable similar blog functionlities later */}
          {/* {blog?.tags?.length > 0 && <SimilarBlog tag={blog?.tags[0]} />} */}

          <GoToSignIn />
        </div>
      )}
    </>
  );
};

export default Blog;
