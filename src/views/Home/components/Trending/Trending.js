import { Loading } from "components/shared";
import React from "react";
import { useSelector } from "react-redux";
import MiniBlogCard from "../MiniBlogCard";

const Trending = () => {
  const {
    data: { trendingBlogs, loading },
  } = useSelector((state) => state.home);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        trendingBlogs?.payload?.map((blog, i) => (
          <div key={blog.blog_id}>
            <MiniBlogCard
              content={blog}
              author={blog.author.personal_info}
              i={i}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Trending;
