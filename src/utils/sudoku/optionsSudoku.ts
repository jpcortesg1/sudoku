import { Option } from "@/interface/Options";
import { Cell } from "@/interface/Sudoku";
import { checkValidCeLL } from "./createSudoku";

export function getOptions(sudoku: Cell[][]) {
  const options: Option = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] !== null) continue;
      const key = [i, j].join(",");
      if (!(key in options)) options[key] = [];
      for (let num = 1; num <= 9; num++) {
        if (checkValidCeLL(sudoku, i, j, num)) options[key].push(num);
      }
    }
  }
  return options;
}

export function getBestOptions(options: Option) {
  let bestOption = null;
  let bestOptionLength = 10;
  for (const key in options) {
    if (options[key].length < bestOptionLength) {
      bestOption = key;
      bestOptionLength = options[key].length;
    }
  }
  return bestOption;
}
