import { createSlice } from "@reduxjs/toolkit";

const showMore = createSlice({
  name: "showMore",
  initialState: {
    shown: 3,
  },
  reducers: {
    addShown(state, action) {
      console.log(action.payload);
      state.shown += action.payload;
    },
    resetShown(state){
        state.shown=3;
    }
  },
});
export const { addShown, resetShown } = showMore.actions;
export default showMore.reducer;
