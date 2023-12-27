import { Avatar, Skeleton, Upload } from "components/ui";
import React, { useState } from "react";
import useImageUpload from "utils/hooks/useImageUpload";
import blogBanner from "assets/img/blog-banner.png";

const Editor = () => {
  const { cloudinaryUploadImg, uploading } = useImageUpload();
  const [image, setImage] = useState(blogBanner);

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
    <div className="mx-auto w-full max-w-[900px]  ">
      <div className="cursor-pointer relative  aspect-video border-gray hover:opacity-80  text-center bg-white">
        <Upload
          className="aspect-video  max-w-[700px] w-full h-full"
          showList={false}
          uploadLimit={1}
          beforeUpload={beforeUpload}
          name="image"
          onChange={(e) => onFileUpload(e, setImage)}
        >
          {uploading ? (
            <Skeleton className="aspect-video max-w-[700px] w-full h-full" />
          ) : (
            <Avatar
              className="w-full h-full max-w-[700px]"
              shape="box"
              src={image}
            />
          )}
        </Upload>

        <textarea
          placeholder="Blog Title"
          className=" h-16 text-4xl font-medium w-full  outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
          onKeyDown={handleKey}
          onChange={handleTitleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
