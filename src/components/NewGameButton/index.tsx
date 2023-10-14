import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import Level from "@/enum/Level";
import {
  canSeeCloseButtonNewGame,
  cannotSeeCloseButtonNewGame,
  closeShowCreateNewGame,
  closeShowCreateSudoku,
  openShowCreateNewGame,
  openShowCreateSudoku,
} from "@/features/popUps/poUpsSlice";
import {
  setCreateNewSudoku,
  setEmptySudoku,
  setSudokuSolved,
} from "@/features/sudoku/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { createSudoku } from "@/utils/sudoku/createSudoku";
import { solveSudoku, verifySudoku } from "@/utils/sudoku/solveSudoku";
import { useEffect, useState } from "react";

export default function NewGameButton() {
  const configuration = useGetConfiguration();
  const dispatch = useDispatch();
  const { show: showCreateNewGame, showCloseButton } = useSelector(
    (root: RootState) => root.popUp.createNewGame
  );
  const { showCreateSudoku } = useSelector((root: RootState) => root.popUp);
  showCreateSudoku;
  const { emptySudoku } = useSelector((root: RootState) => root.sudoku);
  const [isComplete, setIsComplete] = useState(false);

  const help = (level: Level) => {
    let next = true;
    let cont = 0;
    while (next) {
      cont = cont + 1;
      const sudokuSolved = createSudoku(level);
      const emptySudoku = sudokuSolved.map((row) => [...row]);
      solveSudoku(sudokuSolved);
      if (verifySudoku(sudokuSolved)) {
        dispatch(setSudokuSolved(sudokuSolved));
        dispatch(setEmptySudoku(emptySudoku));
        next = false;
        dispatch(closeShowCreateSudoku());
      }
    }
  };

  const handleCreateNewGame = (level: Level) => {
    dispatch(openShowCreateSudoku());
    dispatch(closeShowCreateNewGame());
    dispatch(setCreateNewSudoku());
    setTimeout(() => {
      help(level);
    }, 100);
  };

  const openCreateNewGame = () => {
    dispatch(canSeeCloseButtonNewGame());
    dispatch(openShowCreateNewGame());
  };

  const closeCreateNewGame = () => {
    dispatch(closeShowCreateNewGame());
  };

  const levels = [
    {
      name: "EASY",
      level: Level.EASY,
    },
    {
      name: "MEDIUM",
      level: Level.MEDIUM,
    },
    {
      name: "HARD",
      level: Level.HARD,
    },
    {
      name: "EXTREME",
      level: Level.EXTREME,
    },
    {
      name: "INSANE",
      level: Level.INSANE,
    },
  ];

  useEffect(() => {
    if (showCreateSudoku) return;
    const howManyNumbersMissing = emptySudoku
      .flat()
      .filter((num) => num === null).length;
    console.log(howManyNumbersMissing);
    if (howManyNumbersMissing !== 0) {
      setIsComplete(false);
      return;
    }
    setIsComplete(true);
    dispatch(cannotSeeCloseButtonNewGame());
    dispatch(openShowCreateNewGame());
  }, [emptySudoku, showCreateSudoku, dispatch]);

  return (
    <>
      {showCreateNewGame && (
        <div
          className="absolute top-0 left-0 w-full h-full  z-50 flex justify-center items-center"
          style={{
            background: configuration.firstColor + "90",
          }}
        >
          <div
            className="bg-white px-5 py-3 max-w-[80%]"
            style={{
              background: configuration?.firstColor,
              color: configuration?.thirdColor,
            }}
          >
            <div className="head flex justify-between items-center gap-3 mb-3">
              <h4 className="text-2xl">Create New Game</h4>
              {showCloseButton && (
                <AiOutlineClose
                  className="text-2xl cursor-pointer"
                  onClick={closeCreateNewGame}
                  style={{
                    color: configuration.dangerColor,
                  }}
                />
              )}
            </div>
            <div className="body">
              {isComplete && (
                <p>
                  Congratulations! You have successfully cracked the Sudoku
                  puzzle. Your dedication, logical thinking, and problem-solving
                  skills have paid off. Well done! 🎉
                </p>
              )}
              <p className="text-lg mb-3">Select A Level:</p>

              <div className="levels flex flex-col gap-3 items-center">
                {levels.map((level) => (
                  <button
                    key={level.level}
                    className="px-3 py-1 shadow text-lg rounded-md hover:scale-105 transition-all duration-200 min-w-[200px]"
                    style={{
                      background: configuration?.complementaryColor,
                      color: configuration?.firstColor,
                    }}
                    onClick={() => handleCreateNewGame(level.level)}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className="px-5 py-3 shadow text-lg rounded-md hover:scale-105 transition-all duration-200"
        style={{
          background: configuration?.complementaryColor,
          color: configuration?.firstColor,
        }}
        onClick={openCreateNewGame}
      >
        New Game
      </button>
    </>
  );
}
