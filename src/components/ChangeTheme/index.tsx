import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import { BsSun, BsMoon } from "react-icons/bs";

import Theme from "@/enum/Theme";
import { useDispatch } from "react-redux";
import { setTheme } from "@/features/configuration/configurationSlice";
import { setCookie } from "cookies-next";

export default function ChangeTheme() {
  const configuration = useGetConfiguration();
  const dispatch = useDispatch();

  const handleClick = () => {
    const currentTheme = configuration.theme;
    const nextTheme =
      currentTheme === Theme?.LIGHT ? Theme?.DARK : Theme?.LIGHT;
    setCookie("theme", nextTheme);
    dispatch(setTheme(nextTheme));
  };

  return (
    <button
      className="p-2 rounded-full flex justify-center items-center hover:animate-bounce"
      style={{
        background: configuration.secondColor,
        color: configuration.thirdColor,
      }}
      onClick={handleClick}
    >
      {configuration.theme === Theme?.LIGHT ? <BsMoon /> : <BsSun />}
    </button>
  );
}
