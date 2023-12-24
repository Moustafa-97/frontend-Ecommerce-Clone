import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
  name: "filter",
  initialState: {
    userNeed: String ,
  },
  reducers: {
    setUserNeed(state, action) {
      state.userNeed = action.payload.input;
      localStorage.setItem("userNeed", JSON.stringify(state.userNeed))
    },
  },
});
export const { setUserNeed } = filter.actions;
export default filter.reducer;
