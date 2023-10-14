import { setCell, setCurrentPanel } from "@/features/sudoku/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NumberPanel() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [panel, setPanel] = useState(
    numbers.map((num) => ({
      number: num,
      canSee: true,
    }))
  );
  const configuration = useGetConfiguration();
  const { emptySudoku, currentCell, sudokuSolved, isEditMode } = useSelector(
    (state: RootState) => state.sudoku
  );
  const { row, col } = currentCell;
  const dispatch = useDispatch();

  const handleClick = (number: number) => {
    dispatch(setCurrentPanel(number));
    if (isEditMode) return;
    if (emptySudoku[row][col] === sudokuSolved[row][col]) return;

    dispatch(
      setCell({
        row,
        col,
        value: number,
      })
    );
  };

  useEffect(() => {
    const howManySpecificNumbersMissing = (speNum: number) =>
      9 - emptySudoku.flat().filter((num) => num === speNum).length !== 0;

    setPanel((current) => [
      ...current.map((pan) => ({
        ...pan,
        canSee: howManySpecificNumbersMissing(pan.number),
      })),
    ]);
  }, [emptySudoku]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4  justify-items-center">
      {panel.map(({ number, canSee }, i) => {
        return (
          <div
            className={`px-5 py-3 rounded-md text-3xl text-center hover:scale-110 justify-self-${
              i % 3 === 0 ? "end" : i % 3 === 1 ? "center" : "start"
            } ${i === 0 && "px-6"} text-center`}
            key={number}
            style={{
              background: configuration?.firstColor,
              color: canSee
                ? configuration?.complementaryColor
                : configuration?.firstColor,
              border: `2px solid`,
              borderColor: canSee
                ? configuration?.thirdColor
                : configuration.firstColor,
              cursor: canSee ? "pointer" : "default",
            }}
            onClick={() => canSee && handleClick(number)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}
