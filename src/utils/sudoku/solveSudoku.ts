import Options from "@/interface/Options";
import Sudoku from "@/interface/Sudoku";
import { getBestOption, getOptions } from "./optionsSudoku";

export function checkValidCell(
  sudoku: Sudoku,
  row: Number,
  col: Number,
  num: Number
): Boolean {
  for (let index = 0; index < 9; index++) {
    if (sudoku[row as any][index] === num || sudoku[index][col as any] === num)
      return false;
  }

  const rowStart = Math.floor((row as any) / 3) * 3;
  const colStart = Math.floor((col as any) / 3) * 3;

  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (sudoku[i][j] === num) return false;
    }
  }

  return true;
}

export function isSudokuSolved(sudoku: Sudoku): Boolean {
  for (let row = 0; row < sudoku.length; row++) {
    for (let col = 0; col < sudoku[row].length; col++) {
      if (sudoku[row][col] === null) {
        return false;
      }
    }
  }

  return true;
}

export function solveSudoku(sudoku: Sudoku): Sudoku {
  const options: Options = getOptions(sudoku);
  if (Object.keys(options).length === 0) return sudoku;

  const bestOption: String = getBestOption(options);
  if (options[bestOption as any].length === 0) return sudoku;

  const [row, col] = bestOption.split(", ").map((x) => parseInt(x));
  for (const option in options[bestOption as any]) {
    sudoku[row as any][col as any] = option as any;
    const lastSudoku = [...sudoku];

    sudoku = solveSudoku(sudoku);
    if (isSudokuSolved(sudoku)) return sudoku;
    
    sudoku = [...lastSudoku] as Sudoku;
    sudoku[row as any][col as any] = null;
  }

  return sudoku;
}
