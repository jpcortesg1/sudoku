import { setCurrentCell } from "@/features/configuration/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CellProps {
  value: number | null;
  style: React.CSSProperties;
  row: Number;
  col: Number;
}

export default function Cell(props: CellProps) {
  const { value, style: styleProps, row, col } = props;

  const regrex = /^[0-9]$/; // Only numbers from 0 to 9, 1 digit
  const [valueElement, setValueElement] = useState<Number | null>(value);
  const { currentCell } = useSelector((state: RootState) => state.sudoku);
  const dispatch = useDispatch();

  const [style, setStyle] = useState<React.CSSProperties>(styleProps);
  const configuration = useGetConfiguration();

  // Function to check if the value can be setted
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: valueInput } = e.target;
    const canBe = regrex.test(valueInput);
    if (!canBe) return;
    setValueElement(Number(valueInput));
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
    if (currentCell?.row === row && currentCell?.col === col) {
      setStyle((prev) => ({
        ...prev,
        background: configuration?.complementaryColor,
      }));
    }
  }, [currentCell, row, col, configuration]);

  // Check each time the value changes
  // useEffect(() => {
  //   if (valueElement === 6) setValueElement(null);
  // }, [valueElement]);

  return valueElement ? (
    <div
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl"
      style={style}
      onClick={handleClick}
    >
      {valueElement + ""}
    </div>
  ) : (
    <input
      type="text"
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl text-center focus:outline-none"
      style={{
        ...style,
        caretColor: "transparent",
      }}
      onChange={handleChange}
      value={valueElement || ""}
      onClick={handleClick}
    />
  );
}
