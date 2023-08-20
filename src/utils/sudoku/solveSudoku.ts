import { Cell } from "@/interface/Sudoku";
import { getBestOptions, getOptions } from "./optionsSudoku";

export function verifySudoku(sudoku: Cell[][]) {
  if (!sudoku.some((row) => row.includes(null))) {
    return true;
  }
  return false;
}

export function solveSudoku(sudoku: Cell[][]): Cell[][] {
  const options = getOptions(sudoku);

  if (Object.keys(options).length === 0) {
    return sudoku;
  }

  const bestOption = getBestOptions(options);
  if (bestOption === null) {
    return sudoku;
  }

  for (const option of options[bestOption]) {
    const [row, col] = bestOption.split(",").map((x) => parseInt(x));
    sudoku[row][col] = option;
    const result = solveSudoku(sudoku);
    if (verifySudoku(result)) {
      return result;
    }
    sudoku[row][col] = null;
  }

  return sudoku;
}
