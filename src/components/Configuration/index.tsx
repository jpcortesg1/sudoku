import useGetConfiguration from "@/hooks/redux/useGetConfiguration";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

export default function Configuration() {
  const configuration = useGetConfiguration();

  const handleConfiguration = () => {
    console.log("handleConfiguration");
  }

  return (
    <>
      <button
        className="p-2 rounded-full flex justify-center items-center hover:animate-bounce"
        style={{
          background: configuration.secondColor,
          color: configuration.thirdColor,
        }}
        onClick={handleConfiguration}
      >
        <IoSettingsOutline />
      </button>
    </>
  );
}
