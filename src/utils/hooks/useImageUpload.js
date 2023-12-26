import { Notification, toast } from "components/ui";
import axios from "axios";
import { useState } from "react";

function useImageUpload() {
  const [uploading, setIsUploading] = useState(false);

  const openNotification = (title, type, duration) => {
    return toast.push(
      <Notification width={180} type={type} duration={duration}>
        {title}
      </Notification>,
      {
        placement: "top-center",
      }
    );
  };

  const cloudinaryUploadImg = async (imgToUpload) => {
    setIsUploading(true);
    let temp = openNotification("Uploading...", "success", 0);
    try {
      // console.log(imgToUpload);

      const img = new FormData();
      img.append("image", imgToUpload);
      const { data } = await axios.post(
        `http://ch-api.suman-tech.in/api/get-url`,
        img
      );

      console.log(data);
      toast.removeAll(temp);
      setIsUploading(false);

      return `http://ch-api.suman-tech.in/${data.localpath}`;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    cloudinaryUploadImg,
    uploading,
  };
}

export default useImageUpload;
