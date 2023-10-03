import { setCurrentPanel } from "@/features/configuration/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface NotesCellProps {
  style: React.CSSProperties;
  row: number;
  col: number;
}

export default function NotesCell(props: NotesCellProps) {
  const { style, row, col } = props;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [notes, setNotes] = useState(
    numbers.map((num) => ({
      value: num,
      active: false,
    }))
  );
  const [iscorrect, setIsCorrect] = useState<boolean>(false);
  const configuration = useGetConfiguration();

  const { isEditMode, currentCell, currentPanel, emptySudoku } = useSelector(
    (state: RootState) => state.sudoku
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentCell) return;
    const { row: rowCurrent, col: colCurrent } = currentCell;
    if (rowCurrent === row && colCurrent === col) {
      setNotes((prev) => [
        ...prev.map((note) => ({
          ...note,
          active: note.value == currentPanel ? !note.active : note.active,
        })),
      ]);
    }
    dispatch(setCurrentPanel(null));
  }, [currentCell, col, row, currentPanel, dispatch]);

  useEffect(() => {
    if (!emptySudoku) return;
    if (!emptySudoku[row][col]) {
      setIsCorrect(false);
      return;
    }
    setIsCorrect(true);
  }, [emptySudoku, row, col]);

  // Check each time the currentCell changes, to set acvtive notes
  useEffect(() => {
    const rowStart = Math.floor(Number(row) / 3) * 3;
    const colStart = Math.floor(Number(col) / 3) * 3;
    const rows = [rowStart, rowStart + 1, rowStart + 2];
    const cols = [colStart, colStart + 1, colStart + 2];
    const isRow = rows.includes(currentCell?.row);
    const isCol = cols.includes(currentCell?.col);
    const selected = emptySudoku[currentCell?.row][currentCell?.col];
    if (
      (currentCell?.row === row ||
        currentCell?.col === col ||
        (isRow && isCol)) &&
      selected !== null
    ) {
      setNotes((prev) => [
        ...prev.map((note) => ({
          ...note,
          active: note.value === selected ? false : note.active,
        })),
      ]);
    }
  }, [currentCell, col, row, emptySudoku]);

  return (
    <div
      className="absolute left-0 top-0 bg-slate-300 w-full h-full border-b-2 border-r-2 grid-rows-3 grid-cols-3 grid text-xs justify-items-center p-1"
      style={{
        ...style,
        cursor: "pointer",
        zIndex: isEditMode && !iscorrect ? 2 : -1,
      }}
    >
      {notes.map((note) => (
        <span
          style={{
            visibility: !iscorrect && note.active ? "visible" : "hidden",
            cursor: "pointer",
            color:
              row === currentCell?.row && col === currentCell?.col
                ? configuration?.firstColor
                : configuration.thirdColor,
          }}
          key={note.value}
        >
          {note.value}
        </span>
      ))}
    </div>
  );
}
