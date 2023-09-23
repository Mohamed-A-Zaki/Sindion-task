import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const createNewTicketModalSlice = createSlice({
  name: "createNewTicketModal",
  initialState,
  reducers: {
    open_create_new_ticket_modal(state) {
      state.show = true;
    },
    close_create_new_ticket_modal(state) {
      state.show = false;
    },
  },
});

export const { open_create_new_ticket_modal, close_create_new_ticket_modal } =
  createNewTicketModalSlice.actions;

export default createNewTicketModalSlice.reducer;
