import { setCell, setCurrentPanel } from "@/features/sudoku/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export default function NumberPanel() {
  const panel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {panel.map((number) => {
        return (
          <div
            className="p-7 rounded-md cursor-pointer text-3xl flex justify-center items-center hover:scale-110"
            key={number}
            style={{
              background: configuration?.firstColor,
              color: configuration?.complementaryColor,
              border: `2px solid ${configuration?.thirdColor}`,
            }}
            onClick={() => handleClick(number)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}
