import PopUpsState from "@/interface/popUps";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PopUpsState = {
  showCreateSudoku: true,
  createNewGame: {
    show: false,
    showCloseButton: false,
  },
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
      state.createNewGame.show = false;
    },
    openShowCreateNewGame: (state) => {
      state.createNewGame.show = true;
    },
    canSeeCloseButtonNewGame: (state) => {
      state.createNewGame.showCloseButton = true;
    },
    cannotSeeCloseButtonNewGame: (state) => {
      state.createNewGame.showCloseButton = false;
    },
  },
});

export const {
  closeShowCreateSudoku,
  openShowCreateSudoku,
  closeShowCreateNewGame,
  openShowCreateNewGame,
  canSeeCloseButtonNewGame,
  cannotSeeCloseButtonNewGame,
} = popUpsSlice.actions;

export default popUpsSlice.reducer;
