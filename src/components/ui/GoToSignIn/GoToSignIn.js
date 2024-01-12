import React from "react";
import Dialog from "../Dialog";
import Button from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "views/Blog/store/stateSlice";
// import { closeDialog } from "store/auth/sessionSlice";

const GoToSignIn = () => {
  const { dialogOpen } = useSelector((state) => state.blog.state);
  const dispatch = useDispatch();
  const onDrawerClose = () => {
    dispatch(closeDialog());
  };
  return (
    <Dialog
      isOpen={dialogOpen}
      onClose={onDrawerClose}
      onRequestClose={onDrawerClose}
    >
      <h5 className="mb-4">Please sign in or create a new account.</h5>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.
      </p>
      <div className="text-right mt-6">
        <Button
          className="ltr:mr-2 rtl:ml-2"
          variant="plain"
          onClick={onDrawerClose}
        >
          Cancel
        </Button>
        <Button variant="solid" onClick={onDrawerClose}>
          Okay
        </Button>
      </div>
    </Dialog>
  );
};

export default GoToSignIn;
