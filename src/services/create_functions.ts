import { colorArray } from "styles/color_data"
import _ from "lodash"
import * as I from "types"

/**
 * newIncomeStream is a function that creates a new income instance. An instance represents income for a certain period. Eg. Wal mart Income from 2009 - 2020.
 * It is different than other instances in the same stream because the value is different. Eg. the user may have made less money for the first 5 years of employment, then more later.
 *  */

export const newIncomeStream = (birthYear) => ({
  name: "",
  periods: 0,
  period0StartYear: 2015,
  period0Value: 20000,
  period0EndYear: 2035,
  taxable: true,
  cppEligible: true,
})

/**
 * newSavingsStream creates a new Savings Account object which contains all the details pertaining to a property
 *  */

export const newSavingsStream = (birthYear, owner: I.user, reg: I.reg, state: I.state) => {
  const thisYear = new Date().getFullYear()

  const userName = state.user_reducer[`${owner}Name`]
  return {
    cppEligible: false,
    name: `${userName}'s ${reg}`,
    periods: 0,
    currentValue: 0,
    contributePeriods: 0,
    contribute0StartYear: thisYear,
    contribute0Value: 1000,
    contribute0EndYear: 2040,
    period0StartYear: +birthYear + 65, //period is actually withdrawl, because we want overlap with income we use the same name
    period0Value: 1000,
    period0EndYear: +birthYear + 95,
    taxable: reg === "tfsa" ? false : true,
  }
}

/**
 * newPropertyStream creates a new property object which contains all the details pertaining to a property
 *  */

export const newPropertyStream = (birthYear) => ({
  currentValue: 300000,
  hasMortgage: "no",
  mortgageRate: 3,
  mortgageBalance: 200000,
  mortgageAmortization: 30,
  mortgageStartYear: 30,
  name: "",
  purchasePrice: 300000,
  purchaseYear: 2015,
  taxable: true,
  sellYear: 2040,
})

/**
 * newDebtStream creates a new debt object which contains all the details pertaining to a debt
 *  */

export const newDebtStream = (birthYear) => ({
  rate: 10,
  balance: 2000,
  amortization: 40,
  payment: 200,
  name: "",
  owner: "user1",
})

/**
 * newDebtStream creates a new debt object which contains all the details pertaining to a debt
 *  */

export const createNewStream = (birthYear) => ({
  rate: 10,
  balance: 2000,
  amortization: 40,
  payment: 200,
  name: "",
  owner: "user1",
  reg: "",
})

/**
 * createStream recives an instance object, eg Wal Mart Employment income from 2009 - 2020. It places that object in the main reducer. T
 * Then it sets the UI reducer to have the id, and the stream name of that instance, that way all components know the details for the object they need to edit.
 *  */

export const addPeriodToIncomeStream = (instance: any, period: number, selectedId: any, set: (id: string, reducer: string, value: any, childId?: string) => void): void => {
  set(selectedId, "main_reducer", period + 1, "periods")
  set(selectedId, "main_reducer", +instance[`period${period}StartYear`] + 3, `period${period + 1}StartYear`)
  set(selectedId, "main_reducer", +instance[`period${period}EndYear`] + 3, `period${period + 1}EndYear`)
  set(selectedId, "main_reducer", 3000, `period${period + 1}Value`)
}
export const addPeriodToSavingsStream = (state: I.state, set: (id: string, reducer: string, value: any, childId?: string) => void): void => {
  const { selectedId, savingsTransaction } = state.ui_reducer
  const instance = state.main_reducer[selectedId]

  const { periods, contributePeriods } = instance

  const transactionPeriods = savingsTransaction === "contribute" ? contributePeriods : periods



  const transaction = instance.streamType === "savings" && savingsTransaction === "contribute" ? "contribute" : "period"

  const startingValue = instance[`${transaction}${transactionPeriods}Value`]

  set(selectedId, "main_reducer", transactionPeriods + 1, savingsTransaction === "contribute" ? "contributePeriods" : "periods")
  set(selectedId, "main_reducer", instance[`${transaction}${transactionPeriods}EndYear`], `${transaction}${transactionPeriods + 1}StartYear`)
  set(selectedId, "main_reducer", +instance[`${transaction}${transactionPeriods}EndYear`] + 5, `${transaction}${transactionPeriods + 1}EndYear`)
  set(selectedId, "main_reducer", startingValue, `${transaction}${transactionPeriods + 1}Value`)
}

const newStream = (streamType: I.streamType, birthYear: I.year, owner: I.user, reg: I.reg, state: I.state) => {
  switch (streamType) {
    case "income":
      return newIncomeStream(birthYear)
    case "spending":
      return newIncomeStream(birthYear)
    case "savings":
      return newSavingsStream(birthYear, owner, reg, state)
    case "property":
      return newPropertyStream(birthYear)
    case "debt":
      return newDebtStream(birthYear)
  }
}

export const createStream = (colorIndex: number, set: I.set, streamType: I.streamType, reg: I.reg, owner: I.user, state: I.state): void => {
  const birthYear = state.user_reducer[`${owner}BirthYear`]
  
  let _stream = newStream(streamType, birthYear, owner, reg, state)

  //This creates a new Income Instance, such as from ages 18-22
  const id = owner + _.startCase(streamType) + "_" + (Math.random() * 1000000).toFixed() //creates the random ID that is the key to the object, key includes the owner, then the type of instance eg. "Income", then a random number
  const color = colorArray[colorIndex] //ensures that the color of the new stream is unique
  const createdAt = new Date().toISOString()
  const stream = { ..._stream, createdAt, color, id, owner, reg, streamType }

  set(id, "main_reducer", stream, "") //This action fires and sets the state in the income reducer creating a new item there,
  set("selectedId", "ui_reducer", id, "") // determines which income instance to show within the edit box                                                                                                          // determines which income instance to show within the edit box
  set("colorIndex", "ui_reducer", colorIndex + 1, "") // determines which income instance to show within the edit box
}
