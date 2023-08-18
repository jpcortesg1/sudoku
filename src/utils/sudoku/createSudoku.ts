import Level from "@/enum/Level";
import Sudoku, { Row } from "@/interface/Sudoku";
import { checkValidCell } from "./solveSudoku";

export function createBaseSudoku(): Sudoku {
  const row: Row = [null, null, null, null, null, null, null, null, null];
  const sudoku: Sudoku = [row, row, row, row, row, row, row, row, row];

  for (let i = 0; i < 9; i++) {
    sudoku[i] = [...row];
  }

  return sudoku;
}

export function createSudoku(level: Level): Sudoku {
  const emptySudoku: Sudoku = createBaseSudoku();

  let cont = 0;
  while (level > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    const num = Math.floor(Math.random() * 9) + 1;

    if (checkValidCell(emptySudoku, row, col, num)) {
      emptySudoku[row][col] = num;
      level = level - 1;
      cont = cont + 1;
    }
  }

  return emptySudoku;
}
