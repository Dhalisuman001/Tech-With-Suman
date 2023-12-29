//impoting tools

import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import Link from "@editorjs/link";
import Quate from "@editorjs/quote";
import axios from "axios";

const uploadImageByUrl = (e) => {
  console.log(e);
  let link = new Promise((resolve, reject) => {
    try {
      resolve(e);
    } catch (error) {
      reject(error);
    }
  });

  return link.then((url) => {
    return {
      success: true,
      file: { url },
    };
  });
};
const uploadImageByFile = async (e) => {
  try {
    const img = new FormData();
    img.append("image", e);
    const { data } = await axios.post(
      `http://ch-api.suman-tech.in/api/get-url`,
      img
    );

    console.log(data);

    return {
      success: true,
      file: { url: `http://ch-api.suman-tech.in/${data.localpath}` },
    };
  } catch (error) {
    console.log(error);
  }
};

export const tools = {
  embed: Embed,
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImageByUrl,
        uploadByFile: uploadImageByFile,
      },
    },
  },
  header: {
    class: Header,
    config: {
      placeholder: "Type Heading...",
      levels: [2, 3],
      defaultLevel: 2,
    },
  },

  code: Code,
  inlineCode: InlineCode,
  marker: Marker,
  quate: Quate,
  link: Link,
};
