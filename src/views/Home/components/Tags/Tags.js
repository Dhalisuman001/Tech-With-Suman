import { Tag } from "components/ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTag } from "views/Home/store/stateSlice";

const category = [
  "programmig",
  "hollywood",
  "film making",
  "tech",
  "social media",
  "finances",
  "cooking",
  "travel",
];
const Tags = () => {
  const dispatch = useDispatch();
  const {
    state: { activeTag },
  } = useSelector((state) => state.home);

  const onSelectCategory = (e) => {
    const tag = e.target.innerHTML;

    if (tag === activeTag) {
      dispatch(setActiveTag(""));
    } else {
      dispatch(setActiveTag(tag));
    }
  };
  return (
    <div className="mb-3">
      <h1 className=" font-medium text-xl mb-5">Stories from all interests</h1>
      <div className="flex gap-3 flex-wrap">
        {category.map((tag, i) => (
          <button key={i} onClick={onSelectCategory}>
            <Tag
              className={
                (activeTag === tag
                  ? "text-white  bg-gray-900 "
                  : "text-gray-900 bg-gray-100 ") +
                " border-0 p-2 px-3 capitalize"
              }
            >
              {tag}
            </Tag>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;