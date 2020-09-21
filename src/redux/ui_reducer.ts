import { IUiState } from "types/reducer_types"

const initialState: IUiState = {
  change: false,
  selectedId: "",
  selectedPeriod: 0,
  colorIndex: 0,
  videoUrl: "",
  progress: 0,
  selectedPage: "savings",
  selectedAccount: "tfsa",
  selectedUser: "user1",
  dualSelectValue: true,
  savingsTransaction: "contribute",
  newStream: false,
}

export function ui_reducer(state: IUiState = initialState, action: any): IUiState {
  switch (action.type) {
    case "ui_reducer/SET_VALUE":
      return { ...state, [action.id]: action.value } //sets a simple id value pair within the reducer object
    default:
      return state
  }
}
