import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
        state.darkMode = action.payload;
    }
  },
});

export const { setDarkMode } = theme.actions;
export default theme.reducer;
