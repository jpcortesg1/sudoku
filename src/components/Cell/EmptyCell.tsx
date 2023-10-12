import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addError,
  setCell,
  setCurrentCell,
} from "@/features/sudoku/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import NotesCell from "./NotesCell";

interface EmptyCellProps {
  style: React.CSSProperties;
  row: number;
  col: number;
  isValid: boolean;
  value: number | null;
  setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EmptyCell(props: EmptyCellProps) {
  const { style, row, col, isValid, value, setStyle, setIsValid } = props;

  const configuration = useGetConfiguration();
  const { emptySudoku, sudokuSolved } = useSelector(
    (state: RootState) => state.sudoku
  );
  const dispatch = useDispatch();

  const regrex = /^[0-9]$/; // Only numbers from 0 to 9, 1 digit

  const [haveError, setHaveError] = useState<boolean>(false);

  // Function to check if the value can be setted
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: valueInput } = e.target;
    const lastValue = valueInput[valueInput.length - 1];
    const canBe = regrex.test(lastValue);
    if (!canBe) return;
    dispatch(
      setCell({
        row,
        col,
        value: Number(lastValue),
      })
    );
  };

  // Function to detect cliked
  const handleClick = () => {
    dispatch(
      setCurrentCell({
        row,
        col,
      })
    );
  };

  // Add error only one time
  useEffect(() => {
    if (!haveError) return;
    dispatch(addError());
  }, [haveError, dispatch]);

  // Check each time the value changes
  useEffect(() => {
    const correctValue = sudokuSolved[row][col];
    if (emptySudoku[row][col] === null) return;

    dispatch(
      setCell({
        row,
        col,
        value: emptySudoku[row][col],
      })
    );

    if (emptySudoku[row][col] === correctValue) return;
    setHaveError(true);

    setStyle((prev) => ({
      ...prev,
      background: configuration?.dangerColor,
    }));
    return;
  }, [
    row,
    col,
    sudokuSolved,
    configuration?.dangerColor,
    dispatch,
    emptySudoku,
    setStyle,
  ]);

  // Check each time the sudokuSolved changes
  useEffect(() => {
    setIsValid(sudokuSolved[row][col] === emptySudoku[row][col]);
  }, [sudokuSolved, emptySudoku, row, col, setIsValid]);

  return (
    <div className="relative">
      <NotesCell
        style={{
          ...style,
          pointerEvents: "none",
          borderColor: configuration?.thirdColor,
          color: style?.color || configuration.thirdColor,
          background:
            isValid || value === null
              ? style?.background
              : configuration.dangerColor,
        }}
        row={row}
        col={col}
      />
      <input
        type="text"
        className="w-10	h-10 flex justify-center items-center text-2xl text-center focus:outline-none md:w-14 md:h-14"
        style={{
          caretColor: "transparent",
          background: "transparent",
          zIndex: 1,
          cursor: "pointer",
        }}
        onChange={handleChange}
        value={emptySudoku[row][col] || ""}
        onClick={handleClick}
        // No see keyboard in cellphone
        readOnly
      />
    </div>
  );
}
