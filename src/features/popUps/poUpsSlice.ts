import PopUpsState from "@/interface/popUps";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PopUpsState = {
  showCreateSudoku: true,
  showCreateNewGame: false,
};

export const popUpsSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    closeShowCreateSudoku: (state) => {
      state.showCreateSudoku = false;
    },
    openShowCreateSudoku: (state) => {
      state.showCreateSudoku = true;
    },
    closeShowCreateNewGame: (state) => {
      state.showCreateNewGame = false;
    },
    openShowCreateNewGame: (state) => {
      state.showCreateNewGame = true;
    },
  },
});

export const {
  closeShowCreateSudoku,
  openShowCreateSudoku,
  closeShowCreateNewGame,
  openShowCreateNewGame,
} = popUpsSlice.actions;

export default popUpsSlice.reducer;
