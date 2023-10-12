interface PopUp {
  show: boolean;
  showCloseButton: boolean;
}

export default interface PopUpsState {
  showCreateSudoku: boolean;
  createNewGame: PopUp;
}
