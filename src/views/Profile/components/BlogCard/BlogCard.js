import React from "react";
import Moment from "react-moment";
import useResponsive from "utils/hooks/useResponsive";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogCard = ({ content, author }) => {
  const {
    title,
    des,
    blog_id: id,
    tags,
    publishedAt,
    activity: { total_likes },
    banner,
  } = content;
  const { windowWidth } = useResponsive();

  const { fullname, username, profile_img } = author;
  return (
    <Link
      to={`/blog/${id}`}
      className="flex gap-8  items-center border-b border-gray-300 pb-5 mb-4"
    >
      <div className="w-full">
        <div className="flex gap-2 items-center mb-3">
          <img
            src={profile_img}
            alt="profile"
            className="w-6 h-6 rounded-full"
          />

          <p
            // to={`/user/${username}`}
            className="line-clamp-1 hover:underline capitalize"
          >
            {fullname} @{username}
          </p>

          <Moment fromNow ago>
            {publishedAt}
          </Moment>
        </div>
        <h1 className="text-2xl font-medium leading-7  line-clamp-3 sm:line-clamp-2 capitalize">
          {title}
        </h1>

        {windowWidth >= 1100 && (
          <p className="my-2 text-sm font-sans leading-7 text-gray-800  line-clamp-2">
            {des}
          </p>
        )}
        <div className="flex gap-4 mt-2">
          <span className="py-1 px-2 bg-gray-100 text-gray-800  rounded-md capitalize">
            {tags[0]}
          </span>
          <span className="ml-3 flex items-center gap-2 text-gray-800">
            <FaRegHeart /> {total_likes}
          </span>
        </div>
      </div>
      <div className="h-28 aspect-square bg-gray-300">
        <img
          className="w-full h-full aspect-square object-cover"
          src={banner}
          alt="banner"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
