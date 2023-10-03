import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { BiLoaderAlt } from "react-icons/bi";

interface Props {
  show: boolean;
}

export default function PopUp(props: Props) {
  const { show } = props;
  const configuration = useGetConfiguration();
  return (
    <div
      className="absolute top-0 left-0 w-full h-full  z-50  justify-center items-center"
      style={{
        background: configuration.firstColor + "90",
        display: show ? "flex" : "none",
      }}
    >
      <div
        className="content p-16 flex flex-col justify-center items-center rounded-xl"
        style={{
          background: configuration?.firstColor,
          color: configuration?.thirdColor,
        }}
      >
        <h1 className="text-2xl">Your sudoku is being created</h1>
        <p className="text-xl">
          Please wait a moment while we create your new game.
        </p>
        <BiLoaderAlt className="animate-spin text-6xl" />
      </div>
    </div>
  );
}
