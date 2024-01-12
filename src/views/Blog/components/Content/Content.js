import React from "react";
import ContentBlock from "../ContentBlock";

const Content = ({ content }) => {
  // console.log(content);
  return (
    <div className="my-10 font-medium ">
      {content?.map((block, i) => (
        <div className="my-3 md:my-6" key={i}>
          <ContentBlock block={block} />
        </div>
      ))}
    </div>
  );
};

export default Content;
