import { Button, Input } from "components/ui";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import TimelineAvatar from "../TimelineAvatar";

const WriteComment = () => {
  const commentInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const {
    user: { profile_img },
    session: { signedIn },
  } = useSelector((state) => state.auth);

  const onSubmitComment = () => {
    const value = commentInputRef.current.value;
    setLoading(true);
    setTimeout(() => {
      console.log(value);
      setLoading(false);
      commentInputRef.current.value = "";
    }, 4000);
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
