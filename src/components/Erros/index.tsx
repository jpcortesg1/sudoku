import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { RootState } from "@/store";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Errors() {
  const { errors } = useSelector((state: RootState) => state.sudoku);
  const configuration = useGetConfiguration();
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="rounded-full p-2 relative cursor-pointer"
        style={{
          background: configuration.secondColor,
        }}
      >
        <AiOutlineCloseCircle
          className="text-2xl"
          style={{
            color: configuration.thirdColor,
          }}
        />
        <div
          className="absolute right-[-20%] top-[-30%] rounded-full w-6 h-6 flex justify-center items-center"
          style={{
            background:
              errors > 0
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
            {errors}
          </span>
        </div>
      </div>
      <h3>Errors</h3>
    </div>
  );
}
