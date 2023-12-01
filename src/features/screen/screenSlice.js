import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
  initialState: "pc",
  name: "screenSlice",
  reducers: {
    updateScreen: (state, action) => (state = action.payload),
  },
});
export const {updateScreen} = screenSlice.actions;
export default screenSlice.reducer;