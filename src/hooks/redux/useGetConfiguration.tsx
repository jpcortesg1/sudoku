import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function useGetConfiguration() {
  const configuration = useSelector((state: RootState) => state.configuration);

    return configuration;
}
