import Level from "@/enum/Level";
import { Cell } from "@/interface/Sudoku";

export function checkValidCeLL(
  sudoku: Cell[][],
  row: number,
  col: number,
  num: number
) {
  // Check row and col
  for (let i = 0; i < 9; i++) {
    if (sudoku[row][i] === num || sudoku[i][col] === num) return false;
  }

  // Check box
  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (sudoku[i][j] === num) return false;
    }
  }

  return true;
}

export function createEmptySudoku() {
  const sudoku: Cell[][] = [];
  for (let i = 0; i < 9; i++) {
    sudoku.push([]);
    for (let j = 0; j < 9; j++) {
      sudoku[i].push(null);
    }
  }
  return sudoku;
}

export function createSudoku(level: Level) {
  const emptySudoku = createEmptySudoku();

  while (level > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    const num = Math.floor(Math.random() * 9) + 1;

    if (
      emptySudoku[row][col] === null &&
      checkValidCeLL(emptySudoku, row, col, num)
    ) {
      emptySudoku[row][col] = num;
      level -= 1;
    }
  }

  return emptySudoku;
}
