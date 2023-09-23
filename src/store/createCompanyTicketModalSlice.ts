import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const createCompanyTicketModalSlice = createSlice({
  name: "createCompanyTicketModal",
  initialState,
  reducers: {
    open_create_company_ticket_modal: (state) => {
      state.show = true;
    },
    close_create_company_ticket_modal: (state) => {
      state.show = false;
    },
  },
});

export const {
  open_create_company_ticket_modal,
  close_create_company_ticket_modal,
} = createCompanyTicketModalSlice.actions;

export default createCompanyTicketModalSlice.reducer;
