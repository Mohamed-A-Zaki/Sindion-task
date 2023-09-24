import { TicketType } from "../types/tickets";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  tickets_list: TicketType[];
  ticket: TicketType | null;
};

const initialState: InitialState = {
  tickets_list: [],
  ticket: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicketList(state, { payload }: PayloadAction<TicketType[]>) {
      state.tickets_list = payload;
    },
    setTicket(state, { payload }: PayloadAction<TicketType>) {
      state.ticket = payload;
    },
  },
});

export const { setTicket, setTicketList } = ticketSlice.actions;

export default ticketSlice.reducer;
