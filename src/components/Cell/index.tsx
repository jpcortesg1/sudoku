import { setCurrentCell } from "@/features/configuration/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCell from "./EmptyCell";

interface CellProps {
  value: number | null;
  style: React.CSSProperties;
  row: number;
  col: number;
}

export default function Cell(props: CellProps) {
  const { value, style: styleProps, row, col } = props;

  const { currentCell, emptySudoku } = useSelector(
    (state: RootState) => state.sudoku
  );
  const [isValid, setIsValid] = useState<boolean>(false);

  const dispatch = useDispatch();

  const [style, setStyle] = useState<React.CSSProperties>(styleProps);
  const configuration = useGetConfiguration();

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
    setStyle((prev) => ({
      ...prev,
      color: configuration?.thirdColor,
    }));
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
        color: configuration?.firstColor,
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
    configuration?.thirdColor,
    emptySudoku,
  ]);

  return isValid ? (
    <div
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl"
      style={{
        ...style,
        caretColor: "transparent",
        borderColor: configuration?.thirdColor,
        color: style?.color || configuration?.thirdColor,
      }}
      onClick={handleClick}
    >
      {emptySudoku[row][col] + ""}
    </div>
  ) : (
    <EmptyCell
      style={style}
      row={row}
      col={col}
      isValid={isValid}
      value={value}
      setStyle={setStyle}
      setIsValid={setIsValid}
    />
  );
}
