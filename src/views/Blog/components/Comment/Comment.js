import React from "react";
import WriteComment from "../WriteComment/WriteComment";
import TimelineComments from "../TimeLineComments/TimelineComments";

const Comment = () => {
  return (
    <div>
      <WriteComment />
      <TimelineComments />
    </div>
  );
};

export default Comment;
