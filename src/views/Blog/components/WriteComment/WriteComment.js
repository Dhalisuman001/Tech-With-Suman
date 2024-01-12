import { Button, Input } from "components/ui";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimelineAvatar from "../TimelineAvatar";
import { apiCreateComment } from "services/CommentService";
import { fetchComments } from "views/Blog/store/dataSlice";

const WriteComment = () => {
  const commentInputRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    user: { profile_img },
    session: { signedIn },
  } = useSelector((state) => state.auth);
  const {
    blog: { _id, author },
  } = useSelector((state) => state.blog.data);

  const onSubmitComment = async () => {
    const value = commentInputRef.current.value;
    setLoading(true);

    try {
      const { data } = await apiCreateComment({
        comment: value,
        blog_id: _id,
        blog_author: author._id,
      });
      console.log(data);

      if (data.status) {
        dispatch(fetchComments(_id));
      }
    } catch (error) {
      console.log(error);
    }
    commentInputRef.current.value = "";
    setLoading(false);
  };

  return (
    <>
      {signedIn && (
        <div className=" mt-2 p-2">
          <div className="mt-6 mb-3 flex flex-auto">
            <TimelineAvatar src={profile_img} />
            <div className="ml-4 rtl:mr-4 w-full">
              <Input
                disabled={loading}
                ref={commentInputRef}
                placeholder="Leave a comment"
                textArea
                className="bg-gray-50"
              />
            </div>
          </div>
          <div className="text-right">
            <Button
              variant="solid"
              className="rounded-lg"
              onClick={onSubmitComment}
              loading={loading}
            >
              {loading ? "Posting..." : "Comment"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WriteComment;
