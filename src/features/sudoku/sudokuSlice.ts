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
  clues: 3,
};

export const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  reducers: {
    setCreateNewSudoku: (state) => {
      state.currentCell.row = 0;
      state.currentCell.col = 0;
      state.errors = 0;
      state.isEditMode = false;
      state.currentPanel = null;
      state.clcikedDeleteButton = false;
      state.clues = 3;
    },
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
    toggleDeleteButton: (state) => {
      state.clcikedDeleteButton = !state.clcikedDeleteButton;
    },
    subtractClue: (state) => {
      if (state.clues <= 0) return;
      state.clues--;
    },
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
  toggleDeleteButton,
  subtractClue,
  setCreateNewSudoku,
} = sudokuSlice.actions;

export default sudokuSlice.reducer;
