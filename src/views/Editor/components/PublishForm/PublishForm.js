import { Avatar, Button, Input } from "components/ui";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditor } from "../../store/stateSlice";
import { setBlog, setInitial } from "../../store/dataSlice";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { StickyFooter } from "components/shared";
import { toast, Toaster } from "react-hot-toast";
import { apiCreateBlog } from "services/BlogService";
import { useNavigate } from "react-router-dom";

const characterLimit = 200;
const tagsLimit = 10;

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
  const navigate = useNavigate();
  const {
    data,
    data: { banner, title, des, tags, content },
  } = useSelector((state) => state.blog);

  const [isLoading, setIsLoading] = useState(false);

  const handelOnCancel = () => {
    dispatch(setIsEditor(true));
  };

  const handelBlogTitleChange = (e) => {
    const { value } = e.target;
    dispatch(setBlog({ ...data, title: value }));
  };
  const handelBlogDescription = (e) => {
    const { value } = e.target;
    dispatch(setBlog({ ...data, des: value }));
  };
  const handleKey = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const handelTags = (e) => {
    dispatch(setBlog({ ...data, tags: e }));
    console.log(e);
  };

  const onPublish = async () => {
    if (!title.length) return toast.error("Write a title to publish it!");

    if (!des.length) return toast.error("Write a description to publish it!");

    if (!tags.length) return toast.error("Enter atleast 1 tag!");

    let loadingToast = toast.loading("Publishing...");

    setIsLoading(true);

    try {
      const { data } = await apiCreateBlog({
        banner,
        title,
        des,
        tags,
        draft: false,
        content,
      });
      toast.dismiss(loadingToast);
      toast.success("Published 👍");

      if (data.status) {
        setTimeout(() => {
          dispatch(setInitial());
          dispatch(setIsEditor(true));
          navigate("/home");
        }, 800);
      }
    } catch ({ response: { data } }) {
      toast.dismiss(loadingToast);
      toast.error(data.payload.error);
    }
    setIsLoading(false);
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
            maxTags={tagsLimit}
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
          <div className="w-full text-right">
            <p>{tagsLimit - tags.length} tags left</p>
          </div>
          <StickyFooter
            className="z-20 cursor-pointer px-4 flex items-center justify-end py-4 bg-transparent w-full"
            stickyClass="rounded-lg  dark:bg-gray-800"
          >
            <div>
              <Button
                size="sm"
                className="ltr:mr-3 rtl:ml-3"
                onClick={onPublish}
                // type="submit"
                color="green-600"
                variant="solid"
                loading={isLoading}
              >
                {isLoading ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </StickyFooter>
          <Toaster />
        </div>
      </section>
    </div>
  );
};

export default PublishForm;
