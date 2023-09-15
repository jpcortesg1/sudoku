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

  const { isEditMode, currentCell, currentPanel } = useSelector(
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

  return (
    <div
      className="absolute left-0 top-0 bg-slate-300 w-full h-full border-b-2 border-r-2 grid-rows-3 grid-cols-3 grid text-xs justify-items-center p-1"
      style={{
        ...style,
        cursor: "pointer",
        zIndex: isEditMode ? 2 : -1,
      }}
    >
      {notes.map((note) => (
        <span
          style={{
            visibility: isEditMode && note.active ? "visible" : "hidden",
            cursor: "pointer",
          }}
          key={note.value}
        >
          {note.value}
        </span>
      ))}
    </div>
  );
}
