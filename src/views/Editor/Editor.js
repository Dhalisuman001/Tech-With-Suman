import { Avatar, Skeleton, Upload } from "components/ui";
import React, { useEffect, useState } from "react";
import useImageUpload from "utils/hooks/useImageUpload";
import blogBanner from "assets/img/blog-banner.png";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./components/Tools";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  author: {
    personal_info: {},
  },
};

const Editor = () => {
  const { cloudinaryUploadImg, uploading } = useImageUpload();
  const [image, setImage] = useState(blogBanner);

  useEffect(() => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
      data: "",
      tools,
      placeholder: "Let's write an awesome strory",
    });
    // return () => editor.clear();
  }, []);

  const onFileUpload = async (file, setFieldValue) => {
    const img = await cloudinaryUploadImg(file[0]);

    setFieldValue(img);
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
  };
  return (
    <div>
      <div className="mx-auto max-w-[900px] w-full  flex flex-col items-center">
        <Upload
          className="cursor-pointer aspect-video  max-w-[650px] w-full border-4 border-gray-50 rounded-md"
          showList={false}
          uploadLimit={1}
          beforeUpload={beforeUpload}
          name="image"
          onChange={(e) => onFileUpload(e, setImage)}
        >
          {uploading ? (
            <Skeleton className=" cursor-default  w-full h-full" />
          ) : (
            <Avatar
              className="w-full h-full rounded-xl"
              shape="box"
              src={image}
              mode="contain"
            />
          )}
        </Upload>

        <textarea
          placeholder="Blog Title"
          className=" h-16 text-4xl font-medium w-full  outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
          onKeyDown={handleKey}
          onChange={handleTitleChange}
        ></textarea>
        <hr className="w-full my-3" />

        <div className="w-full h-full">
          <div id="editorjs" className="relative mb-2 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
