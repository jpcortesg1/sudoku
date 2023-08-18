"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Theme from "@/enum/Theme";
import ConfigurationState from "@/interface/ConfigurationState";

const initialState: ConfigurationState = {
  theme: Theme?.LIGHT,
  fontSize: 16,
  firstColor: "#F1F1F1",
  secondColor: "#666666",
  thirdColor: "#111111",
  complementaryColor: "#0000A0",
  lightComplementaryColor: "#0000E0",
  infoColor: "#CCCCCC",
  dangerColor: "#FF5733",
  successColor: "#008000",
  warningColor: "#FAFAD2",
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = configurationSlice.actions;

export default configurationSlice.reducer;
