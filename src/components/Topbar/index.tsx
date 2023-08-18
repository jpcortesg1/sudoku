"use client";

import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import Configuration from "../Configuration";
import ChangeTheme from "../ChangeTheme";

export default function TopBar() {
  const configuration = useGetConfiguration();

  return (
    <div
      className={`sticky top-0 left-0 flex justify-between px-8 py-4`}
      style={{
        background: configuration?.firstColor,
      }}
    >
      <span
        className={`font-bold cursor-pointer`}
        style={{
          color: configuration?.lightComplementaryColor,
          fontSize: configuration?.fontSize * 1.5,
        }}
      >
        Sudoku
      </span>
      <div
        className="icons flex gap-4"
        style={{
          fontSize: configuration?.fontSize * 1.2,
        }}
      >
        <ChangeTheme />

        <Configuration />
      </div>
    </div>
  );
}
