import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Cell from "../Cell";
import React from "react";

export default function Sudoku() {
  const { emptySudoku } = useSelector((state: RootState) => state.sudoku);
  const configuration = useGetConfiguration();

  return (
    <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
      {emptySudoku?.map((row, i) => (
        <div key={i} className="flex">
          {row.map((col, j) => {
            let style: React.CSSProperties = {
              color: configuration?.thirdColor,
              backgroundColor: configuration?.firstColor,
              cursor: "pointer",
              borderColor: configuration?.thirdColor,
            };

            if (i === 0) style = { ...style, borderTopWidth: 4 };
            if (j === 0) style = { ...style, borderLeftWidth: 4 };

            if (i == 8) style = { ...style, borderBottomWidth: 4 };
            if (j == 8) style = { ...style, borderRightWidth: 4 };

            if (i % 3 === 0 && !style.borderTopWidth)
              style = { ...style, borderTopWidth: 3 };
            if ((i + 1) % 3 === 0 && !style.borderBottomWidth)
              style = { ...style, borderBottomWidth: 3 };

            if (j % 3 === 0 && !style.borderLeftWidth)
              style = { ...style, borderLeftWidth: 3 };
            if ((j + 1) % 3 === 0 && !style.borderRightWidth)
              style = { ...style, borderRightWidth: 3 };

            return <Cell value={col} key={j} style={style} row={i} col={j} />;
          })}
        </div>
      ))}
    </div>
  );
}
