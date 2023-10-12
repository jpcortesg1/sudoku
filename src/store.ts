import { configureStore } from "@reduxjs/toolkit";

import configurationReducer from "./features/configuration/configurationSlice";
import sudokuReducer from "./features/sudoku/sudokuSlice";
import popUpsReducer from "./features/popUps/poUpsSlice";

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    sudoku: sudokuReducer,
    popUp: popUpsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
