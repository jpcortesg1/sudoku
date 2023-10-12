import { createSlice } from "@reduxjs/toolkit";
import SudokuState from "../../interface/SudokuState";

const initialState: SudokuState = {
  sudokuSolved: [],
  emptySudoku: [],
  currentCell: {
    row: 0,
    col: 0,
  },
  errors: 0,
  isEditMode: false,
  currentPanel: null,
  clcikedDeleteButton: false,
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
    setCurrentCell: (state, action) => {
      state.currentCell = action.payload;
    },
    setCell: (state, action) => {
      const { row, col, value } = action.payload;
      state.emptySudoku[row][col] = value;
    },
    addError: (state) => {
      state.errors++;
    },
    toggleEditMode: (state) => {
      state.isEditMode = !state.isEditMode;
    },
    setCurrentPanel: (state, action) => {
      state.currentPanel = action.payload;
    },
    toggleDeleteButton: (state)=> {
      state.clcikedDeleteButton = !state.clcikedDeleteButton
    }
  },
});

export const {
  setSudokuSolved,
  setEmptySudoku,
  setCurrentCell,
  setCell,
  addError,
  toggleEditMode,
  setCurrentPanel,
  toggleDeleteButton
} = sudokuSlice.actions;

export default sudokuSlice.reducer;
