"use client";

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
