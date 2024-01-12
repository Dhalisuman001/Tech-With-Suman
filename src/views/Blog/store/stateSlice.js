import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "blog/state",
  initialState: {
    dialogOpen: false,
    // isLike: false,
    username: "",
  },
  reducers: {
    openDialog: (state) => {
      state.dialogOpen = true;
    },
    closeDialog: (state) => {
      state.dialogOpen = false;
    },
    // updateDialogView: (state, action) => {
    //   state.dialogView = action.payload;
    // },
    // setSelectedTicketId: (state, action) => {
    //   state.ticketId = action.payload;
    // },
    // setSelectedBoard: (state, action) => {
    //   state.board = action.payload;
    // },
    // setIsLike: (state, action) => {
    //   state.isLike = action.payload;
    // },
    // setUsername: (state, action) => {
    //   state.activeTag = action.payload;
    // },
  },
});

export const {
  openDialog,
  // updateDialogView,
  closeDialog,
  // setSelectedTicketId,
  // setSelectedBoard,
  // setSelectedTab,
  setUsername,
  // setIsLike,
} = stateSlice.actions;

export default stateSlice.reducer;
