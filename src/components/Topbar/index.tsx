"use client";

import { BsSun, BsMoon } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import Theme from "@/enum/Theme";

export default function TopBar() {
  const configuration = useGetConfiguration();

  return (
    <div
      className={`sticky top-0 left-0 flex justify-between px-8 py-4`}
      style={{
        background: configuration.firstColor,
      }}
    >
      <span
        className={`font-bold cursor-pointer`}
        style={{
          color: configuration.lightComplementaryColor,
          fontSize: configuration.fontSize * 1.5,
        }}
      >
        Sudoku
      </span>
      <div
        className="icons flex gap-4"
        style={{
          fontSize: configuration.fontSize * 1.2,
        }}
      >
        <button
          className="p-2 rounded-full flex justify-center items-center hover:animate-bounce"
          style={{
            background: configuration.secondColor,
            color: configuration.firstColor,
          }}
        >
          {configuration.theme === Theme?.LIGHT ? <BsMoon /> : <BsSun />}
        </button>

        <button
          className="p-2 rounded-full flex justify-center items-center hover:animate-bounce"
          style={{
            background: configuration.secondColor,
            color: configuration.firstColor,
          }}
        >
          <IoSettingsOutline />
        </button>
      </div>
    </div>
  );
}
