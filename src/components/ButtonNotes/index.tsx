import { toggleEditMode } from "@/features/configuration/sudokuSlice";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonNotes() {
  const { isEditMode } = useSelector((state: RootState) => state.sudoku);
  const configuration = useGetConfiguration();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleEditMode());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="rounded-full p-2 relative cursor-pointer"
        style={{
          background: isEditMode
            ? configuration?.complementaryColor
            : configuration.secondColor,
        }}
        onClick={handleClick}
      >
        <BiEdit
          className="text-2xl"
          style={{
            color: isEditMode
              ? configuration?.firstColor
              : configuration.thirdColor,
          }}
        />
      </div>
      <h3>Notes</h3>
    </div>
  );
}
