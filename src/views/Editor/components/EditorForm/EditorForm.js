import { Avatar, Button, Skeleton, Upload } from "components/ui";
import React, { useEffect, useState } from "react";
import useImageUpload from "utils/hooks/useImageUpload";
import blogBanner from "assets/img/blog-banner.png";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../Tools";
import { StickyFooter } from "components/shared";
import { toast, Toaster } from "react-hot-toast";
import { setBlog } from "store/blog/publishSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditor } from "store/blog/commonSlice";

const EditorForm = () => {
  const { cloudinaryUploadImg, uploading } = useImageUpload();
  const {
    blog,
    blog: { content, banner, title },
  } = useSelector((state) => state.blog);

  const [textEditor, setTextEditor] = useState({ isReady: false });
  const dispatch = useDispatch();

  useEffect(() => {
    setTextEditor(
      new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holder: "editorjs",
        data: content,
        tools,
        placeholder: "Let's write an awesome strory",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFileUpload = async (file) => {
    const img = await cloudinaryUploadImg(file[0]);

    dispatch(setBlog({ ...blog, banner: img }));
  };

  const beforeUpload = (files) => {
    let valid = true;

    const allowedFileType = ["image/jpeg", "image/png"];

    for (let file of files) {
      if (!allowedFileType.includes(file.type)) {
        valid = "Please upload a .jpeg or .png file!";
      }
    }

    return valid;
  };

  const handleKey = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e) => {
    const input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    dispatch(setBlog({ ...blog, title: input.value }));
  };

  const onPublish = async () => {
    if (!banner.length)
      return toast.error("Upload a blog banner to publish it!");

    if (!title.length) return toast.error("Write a title to publish it!");

    if (textEditor.isReady) {
      try {
        const res = await textEditor.save();
        if (res.blocks.length) {
          console.log(res);
          dispatch(setBlog({ ...blog, content: res }));
          dispatch(setIsEditor(false));
        } else {
          return toast.error("Write something in your blog tio publish it!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="mx-auto max-w-[900px] w-full  flex flex-col items-center">
      <Upload
        className="cursor-pointer aspect-video  max-w-[650px] w-full border-4 border-gray-50 rounded-md"
        showList={false}
        uploadLimit={1}
        beforeUpload={beforeUpload}
        name="image"
        onChange={(e) => onFileUpload(e)}
      >
        {uploading ? (
          <Skeleton className=" cursor-default  w-full h-full" />
        ) : (
          <Avatar
            className="w-full h-full rounded-xl"
            shape="box"
            src={banner || blogBanner}
            mode="contain"
          />
        )}
      </Upload>

      <textarea
        defaultValue={title}
        placeholder="Blog Title"
        className=" h-16 text-4xl font-medium w-full  outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
        onKeyDown={handleKey}
        onChange={handleTitleChange}
      ></textarea>
      <hr className="w-full my-3" />

      <div className="w-full h-full">
        <div id="editorjs" className="relative mb-2 h-full"></div>
      </div>
      <StickyFooter
        className="z-20 cursor-pointer px-4 flex items-center justify-end py-4 bg-transparent w-full"
        stickyClass="rounded-lg bg-white dark:bg-gray-800"
      >
        <div>
          <Button
            size="sm"
            className="ltr:mr-3 rtl:ml-3"
            onClick={onPublish}
            // type="submit"
            color="green-600"
            variant="solid"
          >
            Publish
          </Button>
          <Button size="sm">Draft</Button>
        </div>
      </StickyFooter>
      <Toaster />
    </div>
  );
};

export default EditorForm;