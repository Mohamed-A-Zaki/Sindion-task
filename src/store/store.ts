import { configureStore } from "@reduxjs/toolkit";
import createNewTicketModalSlice from "./createNewTicketModalSlice";
import createCompanyTicketModalSlice from "./createCompanyTicketModalSlice";

export const store = configureStore({
  reducer: {
    createNewTicketModal: createNewTicketModalSlice,
    createCompanyTicketModal: createCompanyTicketModalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
