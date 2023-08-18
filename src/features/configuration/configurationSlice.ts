import { PayloadAction, createSlice } from "@reduxjs/toolkit";

enum Thme {
  LIGHT = "light",
  DARK = "dark",
  PERSONAL = "personal",
}

export interface ConfigurationState {
  theme: Thme;
  fontSize: number;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  complementaryColor: string;
  lightComplementaryColor: string;
  dangerColor: string;
  successColor: string;
  warningColor: string;
  infoColor: string;
}

const initialState: ConfigurationState = {
  theme: Thme.LIGHT,
  fontSize: 16,
  firstColor: "#E0E0E0",
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
    setTheme: (state, action: PayloadAction<Thme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = configurationSlice.actions;

export default configurationSlice.reducer;
