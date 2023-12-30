import { Avatar, Input } from "components/ui";
import React from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditor } from "store/blog/commonSlice";
import { setBlog } from "store/blog/publishSlice";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const characterLimit = 200;

// const colourOptions = [
//   { value: "ocean", label: "Ocean", color: "#00B8D9" },
//   { value: "blue", label: "Blue", color: "#0052CC" },
//   { value: "purple", label: "Purple", color: "#5243AA" },
//   { value: "red", label: "Red", color: "#FF5630" },
//   { value: "orange", label: "Orange", color: "#FF8B00" },
//   { value: "yellow", label: "Yellow", color: "#FFC400" },
//   { value: "green", label: "Green", color: "#36B37E" },
//   { value: "forest", label: "Forest", color: "#00875A" },
//   { value: "slate", label: "Slate", color: "#253858" },
//   { value: "silver", label: "Silver", color: "#666666" },
// ];

const PublishForm = () => {
  const dispatch = useDispatch();
  const {
    blog,
    blog: { banner, title, des, tags },
  } = useSelector((state) => state.blog);

  const handelOnCancel = () => {
    dispatch(setIsEditor(true));
  };

  const handelBlogTitleChange = (e) => {
    const { value } = e.target;
    dispatch(setBlog({ ...blog, title: value }));
  };
  const handelBlogDescription = (e) => {
    const { value } = e.target;
    dispatch(setBlog({ ...blog, des: value }));
  };
  const handleKey = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const handelTags = (e) => {
    dispatch(setBlog({ ...blog, tags: e }));
    console.log(e);
  };
  return (
    <div className="w-full">
      <section className="mx-auto max-w-[900px] w-full  flex flex-col mb-4">
        <div className="w-full flex flex-row justify-between">
          <p className="mb-1 text-gray-400">Preview</p>
          <button onClick={handelOnCancel}>
            <FiX size={25} className="z-20" />
          </button>
        </div>
        <div className="cursor-pointer  aspect-video  max-w-[650px] w-full border-4 border-gray-50">
          <Avatar
            className="w-full h-full "
            shape="box"
            src={banner}
            mode="contain"
          />
        </div>
        <p className="text-4xl font-medium mt-2 leading-tight line-camp-2 text-gray-900">
          {title}
        </p>
        <h1 className="text-xl font-medium mt-4 leading-7 line-camp-2 text-gray-500">
          {des}
        </h1>
        <div className="mt-7">
          <p>Blog Title</p>
          <Input
            className=" border-gray-50 bg-gray-200 "
            type="text"
            placeholder="Blog Title"
            defaultValue={title}
            onChange={handelBlogTitleChange}
          />
          <p className="mt-4">Short description about your blog</p>
          <Input
            className=" border-gray-50 bg-gray-200 h-20 resize-none leading-7 pl-4"
            type="text"
            textArea
            maxLength={characterLimit}
            placeholder="Description"
            defaultValue={des}
            onChange={handelBlogDescription}
            onKeyDown={handleKey}
          />
          <div className="w-full text-right">
            <p>{characterLimit - des.length} character left</p>
          </div>
          <p className="text-gray-500 mb-2 mt-3">
            Topics - ( Helps is searching and ranking your blog post )
          </p>
          <TagsInput
            type="text"
            value={tags}
            preventSubmit={false}
            onChange={handelTags}
            maxTags={10}
            onlyUnique={true}
            className="bg-gray-200 rounded items-center pt-1 pl-2  "
            inputProps={{
              className: "react-tagsinput-input ",
              placeholder: "Tags",
            }}
            tagProps={{
              className:
                "bg-white rounded react-tagsinput-tag-custom  text-gray-900 inline-block  font-sans text-sm mt-[5px] mr-[5px] p-[5px]",
              classNameRemove: "react-tagsinput-remove",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default PublishForm;
