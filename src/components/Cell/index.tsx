import {
  addError,
  setCell,
  setCurrentCell,
} from "@/features/configuration/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CellProps {
  value: number | null;
  style: React.CSSProperties;
  row: number;
  col: number;
}

export default function Cell(props: CellProps) {
  const { value, style: styleProps, row, col } = props;

  const regrex = /^[0-9]$/; // Only numbers from 0 to 9, 1 digit
  // const [valueElement, setValueElement] = useState<number | null>(value);
  const { currentCell, sudokuSolved, emptySudoku } = useSelector(
    (state: RootState) => state.sudoku
  );
  const [isValid, setIsValid] = useState<boolean>(false);
  const [haveError, setHaveError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const [style, setStyle] = useState<React.CSSProperties>(styleProps);
  const configuration = useGetConfiguration();

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

  // Check each time the currentCell changes, to set the background
  useEffect(() => {
    const rowStart = Math.floor(Number(row) / 3) * 3;
    const colStart = Math.floor(Number(col) / 3) * 3;
    const rows = [rowStart, rowStart + 1, rowStart + 2];
    const cols = [colStart, colStart + 1, colStart + 2];
    const isRow = rows.includes(currentCell?.row);
    const isCol = cols.includes(currentCell?.col);
    const selected = emptySudoku[currentCell?.row][currentCell?.col];
    if (currentCell?.row !== row && currentCell?.col !== col) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.firstColor,
      }));
    }
    if (currentCell?.row === row || currentCell?.col === col) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.lightComplementaryColor,
      }));
    }
    if (isRow && isCol) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.lightComplementaryColor,
      }));
    }
    if (selected !== null && selected === emptySudoku[row][col]) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.complementaryColor,
      }));
    }
    if (
      (currentCell?.row === row ||
        currentCell?.col === col ||
        (isRow && isCol)) &&
      selected !== null &&
      selected === emptySudoku[row][col]
    ) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.dangerColor,
      }));
    }
    if (currentCell?.row === row && currentCell?.col === col) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.complementaryColor,
      }));
    }
  }, [
    currentCell,
    row,
    col,
    configuration?.firstColor,
    configuration?.lightComplementaryColor,
    configuration?.complementaryColor,
    configuration?.dangerColor,
    emptySudoku,
  ]);

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
  ]);

  // Add error only one time
  useEffect(() => {
    if (!haveError) return;
    dispatch(addError());
  }, [haveError, dispatch]);

  // Check each time the sudokuSolved changes
  useEffect(() => {
    setIsValid(sudokuSolved[row][col] === emptySudoku[row][col]);
  }, [sudokuSolved, emptySudoku, row, col]);

  return isValid ? (
    <div
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl"
      style={{
        ...style,
        caretColor: "transparent",
      }}
      onClick={handleClick}
    >
      {emptySudoku[row][col] + ""}
    </div>
  ) : (
    <input
      type="text"
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl text-center focus:outline-none"
      style={{
        ...style,
        caretColor: "transparent",
        background:
          isValid || value === null
            ? style.background
            : configuration.dangerColor,
      }}
      onChange={handleChange}
      value={emptySudoku[row][col] || ""}
      onClick={handleClick}
    />
  );
}
