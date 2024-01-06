import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublishForm from "./components/PublishForm";
import EditorForm from "./components/EditorForm";
import { injectReducer } from "store";
import reducer from "./store";
import { useParams } from "react-router-dom";
// import { fetchBlogDetails } from "views/Blog/store/dataSlice";
import { apiGetBlogDetails } from "services/BlogService";
import { setBlog } from "./store/dataSlice";
import { Spinner } from "components/ui";
import { ImSpinner9 } from "react-icons/im";

injectReducer("editor", reducer);

const Editor = () => {
  const { blog_id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await apiGetBlogDetails(blog_id);
      dispatch(setBlog(data.payload));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (blog_id) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog_id]);

  const {
    state: { isEditor },
  } = useSelector((state) => state.editor);

  return (
    <>
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : (
        <div>{isEditor ? <EditorForm /> : <PublishForm />}</div>
      )}
    </>
  );
};

export default Editor;
