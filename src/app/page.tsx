"use client";

import TopBar from "@/components/Topbar";
import Level from "@/enum/Level";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { createSudoku } from "@/utils/sudoku/createSudoku";
import { solveSudoku, verifySudoku } from "@/utils/sudoku/solveSudoku";
import { useEffect, useState } from "react";

export default function Home() {
  const configuration = useGetConfiguration();
  const [solvedSudoku, setSolvedSudoku] = useState(null);
  const [sudokuToSolve, setSudokuToSolve] = useState(null);
  const [cont, setCOnt] = useState(0);

  useEffect(() => {
    let next = true;
    let cont = 0;
    while (next) {
      cont = cont + 1;
      const sudokuSolved = createSudoku(Level.EASY);
      const emptySudoku = sudokuSolved.map((row) => [...row]);
      solveSudoku(sudokuSolved);
      if (verifySudoku(sudokuSolved)) {
        setCOnt(cont);
        setSolvedSudoku(sudokuSolved as any);
        setSudokuToSolve(emptySudoku as any);
        next = false;
      }
    }
  }, []);

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
                    color: configuration?.thirdColor,
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
