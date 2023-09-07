import { configureStore } from "@reduxjs/toolkit";

import configurationReducer from "./features/configuration/configurationSlice";
import sudokuReducer from "./features/configuration/sudokuSlice";

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    sudoku: sudokuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
