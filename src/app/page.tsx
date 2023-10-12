"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Level from "@/enum/Level";
import Sudoku from "@/components/Sudoku";
import TopBar from "@/components/Topbar";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { createSudoku } from "@/utils/sudoku/createSudoku";
import { solveSudoku, verifySudoku } from "@/utils/sudoku/solveSudoku";
import {
  setEmptySudoku,
  setSudokuSolved,
} from "@/features/configuration/sudokuSlice";
import NumberPanel from "@/components/NumberPanel";
import Errors from "@/components/Erros";
import ButtonNotes from "@/components/ButtonNotes";
import ClearCell from "@/components/clearCell";
import PopUp from "@/components/PopUp";
import ClueButton from "@/components/ClueButton";

export default function Home() {
  const configuration = useGetConfiguration();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let next = true;
    let cont = 0;
    while (next) {
      cont = cont + 1;
      const sudokuSolved = createSudoku(Level.EASY);
      const emptySudoku = sudokuSolved.map((row) => [...row]);
      solveSudoku(sudokuSolved);
      if (verifySudoku(sudokuSolved)) {
        dispatch(setSudokuSolved(sudokuSolved));
        dispatch(setEmptySudoku(emptySudoku));
        next = false;
        setShow(false);
      }
    }
  }, [dispatch]);

  return (
    <>
      <PopUp show={show} />
      <TopBar />
      <main className="flex flex-wrap justify-between px-8 py-4">
        <Sudoku />
        <div className="w-full md:w-1/2 flex justify-between items-center flex-col">
          <div className="actions flex justify-center items-center gap-4">
            <Errors />
            <ButtonNotes />
            <ClearCell />
            <ClueButton />
          </div>
          <NumberPanel />
          <div className="new-game">new game</div>
        </div>
      </main>
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
