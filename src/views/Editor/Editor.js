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
  return (
    <div className="mx-auto max-w-[900px] w-full ">
      <div className="cursor-pointer relative  aspect-video border-gray hover:opacity-80 ">
        {uploading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Upload
            className=""
            showList={false}
            uploadLimit={1}
            beforeUpload={beforeUpload}
            name="image"
            onChange={(e) => onFileUpload(e, setImage)}
          >
            <Avatar
              // size={80}
              className="w-full h-full"
              shape="box"
              src={image}
            />
          </Upload>
        )}
      </div>
      <textarea
        placeholder="Blog Title"
        className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
      ></textarea>
    </div>
  );
};

export default Editor;
