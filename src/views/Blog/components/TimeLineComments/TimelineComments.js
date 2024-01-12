import { Card, Timeline } from "components/ui";
import React, { Fragment } from "react";
import TimelineAvatar from "../TimelineAvatar";
// import isLastChild from "utils/isLastChild";

const activity = [
  {
    type: "COMMENT",
    name: "Frederick Adams",
    img: "/img/avatars/thumb-8.jpg",
    time: "3h ago",
    comment: `Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.`,
  },
  {
    type: "ASSIGN",
    name: "Carolyn Perkins",
    time: "4h ago",
    assignees: ["Frederick Adams", "Joyce Freeman"],
  },
  {
    type: "TAG",
    name: "Carolyn Perkins",
    time: "4h ago",
    labels: [
      {
        title: "Bug",
        class: "bg-red-500",
      },
      {
        title: "High priority",
        class: "bg-amber-500",
      },
    ],
  },
  {
    type: "COMMENT",
    name: "Carolyn Perkins",
    img: "/img/avatars/thumb-1.jpg",
    time: "4h ago",
    comment:
      "Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.",
  },
];

const CommentItem = ({ timeline, ...rest }) => {
  return (
    <Timeline.Item
      className="w-full"
      media={<TimelineAvatar src={timeline?.img} />}
      {...rest}
    >
      <p className="my-1 flex items-center">
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {timeline.name}
        </span>
        <span className="mx-2">added a comment </span>
        <span>{timeline.time}</span>
      </p>
      <Card bordered className="mt-4">
        <p>{timeline.comment}</p>
      </Card>
    </Timeline.Item>
  );
};
const TimelineComments = () => {
  return (
    <div className="mt-4">
      <h3>Comments : {99}</h3>
      <hr className="text-gray-300" />
      <Timeline className="mt-2">
        {activity?.map((item, index) => (
          <Fragment key={item.type + index}>
            <CommentItem timeline={item} />
          </Fragment>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineComments;
