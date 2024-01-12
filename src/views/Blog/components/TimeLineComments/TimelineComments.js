import {
  // Card,
  NoDataMessage,
  Skeleton,
  // Spinner,
  Timeline,
} from "components/ui";
import React, { Fragment, useEffect } from "react";
import TimelineAvatar from "../TimelineAvatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "views/Blog/store/dataSlice";
import Moment from "react-moment";
import { IconText } from "components/shared";
// import { HiClock } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit, FaReply } from "react-icons/fa";
// import isLastChild from "utils/isLastChild";

// const activity = [
//   {
//     type: "COMMENT",
//     name: "Frederick Adams",
//     img: "/img/avatars/thumb-8.jpg",
//     time: "3h ago",
//     comment: `Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.`,
//   },
//   {
//     type: "ASSIGN",
//     name: "Carolyn Perkins",
//     time: "4h ago",
//     assignees: ["Frederick Adams", "Joyce Freeman"],
//   },
//   {
//     type: "TAG",
//     name: "Carolyn Perkins",
//     time: "4h ago",
//     labels: [
//       {
//         title: "Bug",
//         class: "bg-red-500",
//       },
//       {
//         title: "High priority",
//         class: "bg-amber-500",
//       },
//     ],
//   },
//   {
//     type: "COMMENT",
//     name: "Carolyn Perkins",
//     img: "/img/avatars/thumb-1.jpg",
//     time: "4h ago",
//     comment:
//       "Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.",
//   },
// ];

const CustomSpinner = ({ item = [0, 1, 2, 3, 4] }) => {
  return (
    <div>
      {item.map((_, i) => (
        <div className="my-4 mx-2" key={i}>
          <div className="flex items-center gap-4">
            <div>
              <Skeleton variant="circle" />
            </div>
            <Skeleton height={15} />
          </div>
          <Skeleton className="ml-20 mt-3 w-48" height={30} />
        </div>
      ))}
    </div>
  );
};

const TimelineComments = () => {
  const dispatch = useDispatch();
  const {
    blog: { _id },
    comments,
    commentLoading,
  } = useSelector((state) => state.blog.data);

  const { username } = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (_id !== undefined) {
      // console.log("this", _id);
      dispatch(fetchComments(_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id]);

  const CommentItem = ({ timeline, ...rest }) => {
    return (
      <Timeline.Item
        className="w-full"
        media={
          <TimelineAvatar
            src={timeline?.commented_by?.personal_info?.profile_img}
          />
        }
        {...rest}
      >
        <p className="my-1 flex items-center">
          <span className="font-semibold text-gray-900 dark:text-gray-100 capitalize">
            {timeline.commented_by?.personal_info?.fullname}
          </span>
          <span className="mx-2">commented </span>
          <Moment fromNow ago>
            {timeline.commentedAt}
          </Moment>
          &nbsp;ago
        </p>
        <div
          // bordered
          className="mt-1 px-4 py-2 bg-gray-50 border-[1px] border-gray-300 rounded-xl "
        >
          <p>{timeline.comment}</p>
          <div className="flex flex-row justify-end gap-4 mt-2">
            {username === timeline.commented_by?.personal_info?.username && (
              <IconText
                className="text-emerald-500 text-sm "
                icon={<FaEdit className="text-sm" />}
              >
                Edit
              </IconText>
            )}
            {username === timeline.commented_by?.personal_info?.username && (
              <IconText
                className=" text-red-500 text-sm "
                icon={<AiFillDelete className="text-sm" />}
              >
                Delete
              </IconText>
            )}

            <IconText
              className=" text-blue-500 text-sm "
              icon={<FaReply className=" text-sm" />}
            >
              Reply
            </IconText>
          </div>
        </div>
      </Timeline.Item>
    );
  };

  return (
    <div className="mt-4">
      <h3 className="mb-2">Comments : {comments.length}</h3>
      <hr className="text-gray-300" />
      {commentLoading ? (
        <CustomSpinner item={comments} />
      ) : comments.length <= 0 ? (
        <NoDataMessage message={"No one commented yet!"} />
      ) : (
        <Timeline className="mt-4">
          {comments?.map((item, index) => (
            <Fragment key={item.type + index}>
              <CommentItem timeline={item} />
            </Fragment>
          ))}
        </Timeline>
      )}
    </div>
  );
};

export default TimelineComments;
