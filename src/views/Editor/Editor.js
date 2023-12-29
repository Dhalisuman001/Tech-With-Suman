import { Avatar, Button, Skeleton, Upload } from "components/ui";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PublishForm from "./components/PublishForm";
import EditorForm from "./components/EditorForm";

const Editor = () => {
  const {
    common: { isEditor },
  } = useSelector((state) => state.blog);

  return <div>{isEditor ? <EditorForm /> : <PublishForm />}</div>;
};

export default Editor;
