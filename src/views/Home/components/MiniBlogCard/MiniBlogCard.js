import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const MiniBlogCard = ({ content, author, i }) => {
  const { blog_id: id, title, publishedAt } = content;
  const { fullname, username, profile_img } = author;
  return (
    <Link to={`/blog/${id}`} className="flex gap-5 mb-8">
      <h1 className="text-gray-300 text-4xl sm:text-3xl lg:text-5xl font-bold leading-none">
        {i < 10 ? "0" + (i + 1) : i + 1}
      </h1>
      <div>
        <div className="flex gap-2 items-center mb-3">
          <img
            src={profile_img}
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <p className="line-clamp-1">
            {fullname} @{username}
          </p>

          <Moment fromNow ago>
            {publishedAt}
          </Moment>
        </div>
        <h1 className="text-2xl font-medium leading-7  line-clamp-3 sm:line-clamp-2">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default MiniBlogCard;
