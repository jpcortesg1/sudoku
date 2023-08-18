"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Theme from "@/enum/Theme";
import ConfigurationState, {
  ConfigurationStateBase,
} from "@/interface/ConfigurationState";

const darkMode: ConfigurationStateBase = {
  fontSize: 16,
  firstColor: "#212121",
  secondColor: "#666666",
  thirdColor: "#F1F1F1",
  complementaryColor: "#0000E0",
  lightComplementaryColor: "#0000EE",
  infoColor: "#CCCCCC",
  dangerColor: "#FF5733",
  successColor: "#008000",
  warningColor: "#FAFAD2",
};

const lightMode: ConfigurationStateBase = {
  fontSize: 16,
  firstColor: "#F1F1F1",
  secondColor: "#666666",
  thirdColor: "#212121",
  complementaryColor: "#0000A0",
  lightComplementaryColor: "#0000E0",
  infoColor: "#CCCCCC",
  dangerColor: "#FF5733",
  successColor: "#008000",
  warningColor: "#FAFAD2",
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
