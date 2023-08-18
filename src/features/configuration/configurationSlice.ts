"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Theme from "@/enum/Theme";
import ConfigurationState, {
  ConfigurationStateBase,
} from "@/interface/ConfigurationState";

const darkMode: ConfigurationStateBase = {
  fontSize: 16,
  firstColor: "#212121",
  secondColor: "#C0C0C0",
  thirdColor: "#F1F1F1",
  complementaryColor: "#B0FFFF",
  lightComplementaryColor: "#00CCCC",
  infoColor: "#CCCCCC",
  dangerColor: "#FF6969",
  successColor: "#46E346",
  warningColor: "#CCBE00",
};

const lightMode: ConfigurationStateBase = {
  fontSize: 16,
  firstColor: "#F1F1F1",
  secondColor: "#C0C0C0",
  thirdColor: "#212121",
  complementaryColor: "#00CCCC",
  lightComplementaryColor: "#B0FFFF",
  infoColor: "#CCCCCC",
  dangerColor: "#FF6969",
  successColor: "#46E346",
  warningColor: "#FFEE00",
};

const initialState: ConfigurationState = {
  theme: Theme?.LIGHT,
  ...lightMode,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      const newTheme = action.payload === Theme?.LIGHT ? lightMode : darkMode;

      let key: keyof ConfigurationStateBase;
      for (key in newTheme) {
        if (state.hasOwnProperty(key) && newTheme.hasOwnProperty(key)) {
          state[key] = newTheme[key] as never;
        }
      }
    },
  },
});

export const { setTheme } = configurationSlice.actions;

export default configurationSlice.reducer;
