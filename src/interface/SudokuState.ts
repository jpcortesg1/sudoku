import { Cell } from "@/interface/Sudoku";

export default interface SudokuState {
  sudokuSolved: Cell[][];
  emptySudoku: Cell[][];
  currentCell: {
    row: number;
    col: number;
  };
  errors: number;
  isEditMode: boolean;
  currentPanel: number | null;
  clcikedDeleteButton: boolean;
  clues: number;
}
