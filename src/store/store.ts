import { configureStore } from "@reduxjs/toolkit";
import createNewTicketModalSlice from "./createNewTicketModalSlice";
import createCompanyTicketModalSlice from "./createCompanyTicketModalSlice";
import ticketSlice from "./ticketSlice";

export const store = configureStore({
  reducer: {
    createNewTicketModal: createNewTicketModalSlice,
    createCompanyTicketModal: createCompanyTicketModalSlice,
    ticket: ticketSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
