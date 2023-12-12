"use client";

import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  mode: string;
};

const initialState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const getThemeMode = (state: { theme: ThemeState }) => state.theme.mode;

export default themeSlice.reducer;
