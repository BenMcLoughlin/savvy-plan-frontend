import { IUserState } from "types/reducer_types"

const initialState = {
  changeAssumptions: "",
  hasUnsecuredDebt: false,
  numberOfChildren: 1,
  gender: "",
  hasChildren: "",
  ownHome: false,
  inflationRate: 2,
  maritalStatus: "married",
  MER: 2,
  province: "British Columbia",
  rate1: 6,
  rate2: 4.5,
  user1BirthYear: 1990,
  user2BirthYear: 1990,
  user1CppStartAge: 65,
  user2CppStartAge: 65,
  user1Gender: "",
  user1LifeSpan: 95,
  user2LifeSpan: 95,
  user1Name: "Ben",
  user2Name: "Kelsey",
  user1OasStartAge: 65,
  user2OasStartAge: 65,
}

export function user_reducer(state = initialState, action: any): IUserState {
  switch (action.type) {
    case "user_reducer/SET_VALUE":
      return { ...state, [action.id]: action.value } //sets a simple key value pair within the reducer object
    default:
      return state
  }
}
