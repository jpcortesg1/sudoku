"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Level from "@/enum/Level";
import Sudoku from "@/components/Sudoku";
import TopBar from "@/components/Topbar";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { createSudoku } from "@/utils/sudoku/createSudoku";
import { solveSudoku, verifySudoku } from "@/utils/sudoku/solveSudoku";
import { setEmptySudoku, setSudokuSolved } from "@/features/sudoku/sudokuSlice";
import NumberPanel from "@/components/NumberPanel";
import Errors from "@/components/Erros";
import ButtonNotes from "@/components/ButtonNotes";
import ClearCell from "@/components/clearCell";
import PopUp from "@/components/PopUp";
import ClueButton from "@/components/ClueButton";
import NewGameButton from "@/components/NewGameButton";
import { RootState } from "@/store";
import { closeShowCreateSudoku } from "@/features/popUps/poUpsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { showCreateSudoku } = useSelector((root: RootState) => root.popUp);

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
        dispatch(closeShowCreateSudoku());
      }
    }
  }, [dispatch]);

  return (
    <>
      <PopUp show={showCreateSudoku} />
      <TopBar />
      <main className="flex flex-col justify-center gap-8 px-8 py-4 md:flex-row">
        <Sudoku />

        <div className="flex justify-between  flex-col gap-3">
          <div className="actions flex justify-center items-center gap-4">
            <Errors />
            <ButtonNotes />
            <ClearCell />
            <ClueButton />
          </div>
          <NumberPanel />
          <NewGameButton />
        </div>
      </main>
    </>
  );
}
