import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  const [style, setStyle] = useState<React.CSSProperties>(styleProps);
  const configuration = useGetConfiguration();

  if (row === 0 && col === 0) console.log("Cell", currentCell, row, col);

  // Function to check if the value can be setted
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: valueInput } = e.target;
    const canBe = regrex.test(valueInput);
    if (!canBe) return;
    setValueElement(Number(valueInput));
  };

  // Function to detect cliked
  const handleClick = () => {
    console.log("Clicked", row, col);
  };

  useEffect(() => {
    if (currentCell?.row !== row || currentCell?.col !== col) return;
    setStyle((prev: any) => ({
      ...prev,
      background: configuration?.complementaryColor,
    }));
  }, [currentCell, row, col, configuration]);

  // Check each time the value changes
  // useEffect(() => {
  //   if (valueElement === 6) setValueElement(null);
  // }, [valueElement]);

  return valueElement ? (
    <div
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl"
      style={style}
    >
      {valueElement + ""}
    </div>
  ) : (
    <input
      type="text"
      className="w-14 border-b-2 border-r-2	h-14 flex justify-center items-center text-2xl text-center focus:outline-none"
      style={{
        ...style,
      }}
      onChange={handleChange}
      value={valueElement || ""}
      onClick={handleClick}
    />
  );
}
