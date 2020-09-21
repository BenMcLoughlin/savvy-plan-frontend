import root_reducer from "redux/root_reducer"
import { Action } from "redux"
import * as I from "types"

export interface IUiState {
  change: boolean
  selectedId: string
  colorIndex: number
  videoUrl: string
  progress: number
  selectedPage: string
  selectedUser: I.user
  selectedPeriod: number
  selectedAccount: I.reg
  newStream: boolean
  savingsTransaction: string
  dualSelectValue: boolean
}

export interface IUserState {
  child1BirthYear?: number
  child2BirthYear?: number
  changeAssumptions: string
  numberOfChildren: number
  gender: string
  hasChildren: string
  ownHome: boolean
  inflationRate: number
  maritalStatus: string
  MER: number
  province: string
  rate1: number
  rate2: number
  user1BirthYear: number
  user2BirthYear: number
  user1CppStartAge: number
  user2CppStartAge: number
  user1LifeSpan: number
  user2LifeSpan: number
  user1Name: string
  user2Name: string
  user1OasStartAge: number
  user2OasStartAge: number
}

export interface main_reducer {
  [key: string]: instance
}

export type TreducerID = keyof IUserState | keyof IUiState | keyof main_reducer

export interface Iset extends Action {
  type: string
  id: string
  childId?: string
  value: any
}

export type state = ReturnType<typeof root_reducer>

export interface IinstanceCore {
  color: string
  contributePeriods?: number
  createdAt: string
  id: string
  name: string
  periods: any
  owner: I.owner
  reg: string
  streamType: string
}

export interface incomeStream extends IinstanceCore {
  cppEligible: boolean
  periods: number
  period0StartYear: I.year
  period0Value: number
  period0EndYear: I.year
  taxable: boolean
  [key: string]: any
}

export interface savingsStream extends IinstanceCore {
  periods: number
  period0StartYear: I.year
  period0Value: number
  period0EndYear: I.year
  taxable: boolean
  [key: string]: any
}

export interface propertyStream extends IinstanceCore {
  currentValue: number
  hasMortgage: "yes" | "no"
  mortgageRate: number
  mortgageBalance: number
  mortgageAmortization: number
  mortgageStartYear: I.year
  purchasePrice: number
  purchaseYear: I.year
  taxable: boolean
  sellYear: I.year
}

export interface debtStream extends IinstanceCore {
  rate: number
  balance: number
  amortization: number
  payment: number
}

export type instance = incomeStream | propertyStream | savingsStream | debtStream
