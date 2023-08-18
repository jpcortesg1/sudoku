import Options from "@/interface/Options";
import Sudoku from "@/interface/Sudoku";
import { checkValidCell } from "./solveSudoku";

export function getOptions(sudoku: Sudoku): Options {
  const options: Options = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === null) {
        const str = `${i}, ${j}`;
        if (!(str in options)) options[str] = [];
        for (let num = 1; num <= 9; num++) {
          if (checkValidCell(sudoku, i, j, num)) options[str].push(num);
        }
      }
    }
  }
  return options;
}

export function getBestOption(options: Options): String {
  const bestOption = Object.keys(options).reduce((a, b) => {
    return options[a].length < options[b].length ? a : b;
  });
  return bestOption;
}
