import { Avatar } from "components/ui";
import React from "react";

const TimelineAvatar = ({ children, ...rest }) => {
  return (
    <Avatar {...rest} size={30} shape="circle">
      {children}
    </Avatar>
  );
};

export default TimelineAvatar;
