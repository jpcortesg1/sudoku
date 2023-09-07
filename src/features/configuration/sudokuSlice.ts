import { createSlice } from "@reduxjs/toolkit";
import SudokuState from "../../interface/SudokuState";

const initialState: SudokuState = {
  sudokuSolved: [],
  emptySudoku: [],
  currentCell: {
    row: 0,
    col: 0,
  },
};

export const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  reducers: {
    setSudokuSolved: (state, action) => {
      state.sudokuSolved = action.payload;
    },
    setEmptySudoku: (state, action) => {
      state.emptySudoku = action.payload;
    },
  },
});

export const { setSudokuSolved, setEmptySudoku } = sudokuSlice.actions;

export default sudokuSlice.reducer;
