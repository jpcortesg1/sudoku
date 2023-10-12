import { setCell, toggleDeleteButton } from "@/features/sudoku/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function ClearCell() {
  const configuration = useGetConfiguration();
  const { emptySudoku, sudokuSolved, currentCell } = useSelector(
    (state: RootState) => state.sudoku
  );
  const dispatch = useDispatch();

  const handleDelete = () => {
    const { row, col } = currentCell;
    dispatch(toggleDeleteButton());
    if (
      emptySudoku[row][col] === null ||
      emptySudoku[row][col] === sudokuSolved[row][col]
    )
      return;
    dispatch(
      setCell({
        row,
        col,
        value: null,
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="rounded-full p-2 relative cursor-pointer"
        style={{
          background: configuration.secondColor,
        }}
        onClick={handleDelete}
      >
        <BsTrash
          className="text-2xl"
          style={{
            color: configuration.thirdColor,
          }}
        />
      </div>
      <h3>Delete</h3>
    </div>
  );
}
