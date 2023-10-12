import { setCell, subtractClue } from "@/features/sudoku/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { BsLightbulb } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function ClueButton() {
  const configuration = useGetConfiguration();
  const { clues, currentCell, sudokuSolved, emptySudoku } = useSelector(
    (root: RootState) => root.sudoku
  );
  const dispatch = useDispatch();

  // When clicked, the current cell will be filled with the correct value
  const handleClick = () => {
    const { row, col } = currentCell;
    const emptyCell = emptySudoku[row][col];
    const solvedCell = sudokuSolved[row][col];
    if (emptyCell === solvedCell) return;
    if (clues === 0) return;
    dispatch(setCell({ row, col, value: solvedCell }));
    dispatch(subtractClue());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="rounded-full p-2 relative cursor-pointer"
        style={{
          background: configuration.secondColor,
        }}
        onClick={handleClick}
      >
        <BsLightbulb
          className="text-2xl"
          style={{
            color: configuration.thirdColor,
          }}
        />
        <div
          className="absolute right-[-20%] top-[-30%] rounded-full w-6 h-6 flex justify-center items-center"
          style={{
            background:
              clues === 0
                ? configuration.dangerColor
                : configuration.secondColor,
          }}
        >
          <span
            className=""
            style={{
              color: configuration.thirdColor,
            }}
          >
            {clues}
          </span>
        </div>
      </div>
      <h3>Notes</h3>
    </div>
  );
}
