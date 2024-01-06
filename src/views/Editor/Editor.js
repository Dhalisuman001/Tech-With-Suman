import React from "react";
import { useSelector } from "react-redux";
import PublishForm from "./components/PublishForm";
import EditorForm from "./components/EditorForm";
import { injectReducer } from "store";
import reducer from "./store";

injectReducer("editor", reducer);
const Editor = () => {
  const {
    state: { isEditor },
  } = useSelector((state) => state.editor);

  return <div>{isEditor ? <EditorForm /> : <PublishForm />}</div>;
};

export default Editor;
