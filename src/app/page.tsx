"use client";

import TopBar from "@/components/Topbar";
import Level from "@/enum/Level";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { createSudoku } from "@/utils/sudoku/createSudoku";


export default function Home() {
  const configuration = useGetConfiguration();
  const sudoku = createSudoku(Level.EASY);
  
  return (
    <>
      <TopBar />
      <div className="h-min-[100vh] pt-4">
        <div className="container w-[90%] m-auto gap-4 flex flex-wrap justify-between">
          {Object.keys(configuration).map((key) => {
            if (configuration[key as never][0] === "#") {
              return (
                <div
                  className="card w-[11rem] h-[11rem] flex justify-center items-center"
                  style={{
                    background: configuration[key as never],
                    color: configuration?.thirdColor
                  }}
                  key={key}
                >
                  <h1>{key}</h1>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
