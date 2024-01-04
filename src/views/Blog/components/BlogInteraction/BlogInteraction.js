import React from "react";
import { useSelector } from "react-redux";
import { FaRegHeart, FaRegCommentDots, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const BlogInteraction = () => {
  const {
    data: { blog },
  } = useSelector((state) => state.blog);
  const {
    user: { username },
  } = useSelector((state) => state.auth);
  return (
    <>
      <hr className="text-gray-100 " />
      <div className="my-2 flex justify-between">
        <div className="flex gap-3 items-center">
          <button className=" p-2 rounded-full items-center justify-center bg-gray-50">
            <FaRegHeart size={15} />
          </button>
          <p>{blog.activity?.total_likes}</p>

          <button className=" p-2 rounded-full items-center justify-center bg-gray-50">
            <FaRegCommentDots size={15} />
          </button>
          <p>{blog.activity?.total_comments}</p>
        </div>

        <div className="flex gap-6 items-center">
          {username === blog?.author?.personal_info?.username && (
            <Link
              to={`blog-edit/${blog?.blog_id}`}
              className="hover:bg-gray-50 p-2 flex text-center justify-center rounded-full"
            >
              <FiEdit size={15} className="hover:text-purple-600 " />
            </Link>
          )}
          <Link to={`https://twitter.com/intent/tweet?text=read${blog.title}}`}>
            <FaTwitter size={15} className="hover:text-blue-600" />
          </Link>
        </div>
      </div>
      <hr className="text-gray-100 " />
    </>
  );
};

export default BlogInteraction;
