import { createStream } from "services/create_functions"
import * as I from "types"
import _ from "lodash"

import { insertQuestionArray, savingsAccountsArray } from "services/questions/question_functions"

export const onboardQuestions_data = (data: any, state: any, set: any, progress: number, remove: any) => {
  const { user_reducer, main_reducer, ui_reducer } = state

  const { maritalStatus, hasChildren, numberOfChildren,  user1Gender,  user1BirthYear, user2BirthYear, user1Name, user2Name, ownHome, hasUnsecuredDebt } = user_reducer
  // const { selectedId } = user_reducer

  const { colorIndex } = ui_reducer

  const _questions: any = [
    {
      data: "intro",
      component: "null",
      valid: true,
      label: "continue",
      handleChange: () => set("progress", "ui_reducer", 1),
    },
    {
      data: "user1Name",
      component: "TextInput", // tells the wizard to render a text input in which the user types their name
      type: "text",
      valid: user1Name.length > 1,
      handleChange: (value: string) => set("user1Name", "user_reducer", value),
    },
    {
      data: "user1BirthYear",
      component: "TextInput", //Text input will capture their birthyear
      valid: user1BirthYear.length >= 4 && user1BirthYear > 1940,
      value: user1BirthYear,
      type: "year", //by setting it as type year the component will place valiation on the text
      handleChange: (value: string) => set("user1BirthYear", "user_reducer", value),
    },
    {
      data: "user1BirthGender",
      component: "PickSingleOption", //this component allows the user to choose one of a number of options
      textInput: true, //enables a text input box for the user to write their gender if they want
      valid: maritalStatus.length > 2,
      value: user1Gender,
      handleChange: (value: string) => set("user1Gender", "user_reducer", value),
    },
    {
      data: "maritalStatus",
      component: "PickSingleOption",
      textInput: true,
      valid: user_reducer.maritalStatus.length > 2,
      value: user_reducer.maritalStatus,
      handleChange: (value: string) => set("maritalStatus", "user_reducer", value),
    },
  ]

  //  ------ADD TO ARRAY IF USER IS MARRIED
  if (maritalStatus === "married" || maritalStatus === "common-law") {
    // if the user is married we need to gather their spouse's first name and birth
    _questions.push({
      data: "user2Name",
      component: "TextInput",
      type: "text",
      valid: user2Name.length > 1,
      value: user2Name,
      handleChange: (value: string) => set("user2Name", "user_reducer", value),
    })
    _questions.push({
      data: "user2BirthYear",
      component: "TextInput",
      type: "year",
      valid: user2BirthYear.length >= 4 && user2BirthYear > 1940,
      value: user2BirthYear,
      handleChange: (value: string) => set("user2BirthYear", "user_reducer", value),
    })
  }

  _questions.push({
    data: "children",
    component: "PickSingleOption",
    textInput: false,
    valid: true,
    value: hasChildren,
    handleChange: (value: string) => set("hasChildren", "user_reducer", value),
  })

  //  ------ADD TO ARRAY IF USER HAS CHILDREN
  if (hasChildren === "yes" || hasChildren === "hope to eventually") {
    // if the user has children we need to gather the number and birth years of the children
    _questions.push({
      data: "numberOfChildren",
      explanation:
        hasChildren === "yes"
          ? "We'd like to estimate your government child benefits."
          : "Just guessing is fine, it will give you an idea of the impact of government benefits on your plan. You can always change it later. ",
      component: "PickNumberWithText",
      value: numberOfChildren,
      childValue: numberOfChildren,
      valid: numberOfChildren > 0,
      handleChange: (n: number) => set("numberOfChildren", "user_reducer", n),
      handleChange2: (value: string, childId: string) => set(`${childId}`, "user_reducer", value),
    })
  }

  //Question 6: ADD INCOME TO CHART?
  _questions.push({
    data: "user1Income",
    component: "Button",
    valid: user_reducer.numberOfChildren > 0,
    handleChange: () => {
      set("progress", "ui_reducer", progress + 1)
      createStream(colorIndex, set, "income", "employment", "user1", state)
    },
  })

  //  ------ADD TO INCOME STREAMS TO ARRAY
  // Here need to map through all the income streams and add them to the primary questions.
  insertQuestionArray("user1Income", "user1", remove, set, state, "income", _questions)


  //Question 6: ADD SPOUSE'S INCOME TO CHART?
  if (maritalStatus === "married" || maritalStatus === "common-law") {
    _questions.push({
      data: "addUser2Income",
      component: "DualSelect",
      option1: "yes",
      option2: "no",
      value: ui_reducer.dualSelectValue,
      valid: true,
      nextHandleChange: () => {
        set('selectedUser', 'ui_reducer', 'user2')},
      handleChange: () => {
        set("dualSelectValue", "ui_reducer", true)
        createStream(colorIndex, set, "income", "employment", "user2", state)
        set("selectedAccount", "ui_reducer", "before tax")
      },
      handleChange2: () => {
        set("dualSelectValue", "ui_reducer", false)
        set("selectedId", "ui_reducer", false)
      },
    })
      // ------ADD SPOUSE'S INCOME STREAMS TO ARRAY
  //Here need to map through all the income streams and add them to the primary questions.
  insertQuestionArray("user2Income", "user2", remove, set, state, "income", _questions)

  }

  // ASK IF THEY HAVE INVESTMENTS
  _questions.push({
    data: "user1Savings",
    optionArray: savingsAccountsArray,
    arrayOfSelected: Object.values(main_reducer).filter((d: any) => d.id.includes(`user1Savings`)),
    component: "PickMultipleOptions",
    user: "user1",
    value: ui_reducer.dualSelectValue,
    valid: true,
    question: maritalStatus === "married" ? `Does ${_.startCase(user1Name)} have investments?` : "Do you have investments?",
    nextHandleChange: () => {
      set('selectedUser', 'ui_reducer', 'user1')},
    handleChange: (selected, d: any) => {
      if (!selected && d.label !== "none") {
        // check if the item doesnt already exist, or its not none, and will then create a new income st
        createStream(colorIndex, set, `savings`,  d.reg.toLowerCase(), "user1", state)
      } //checks if there is no currently selected version, if so it adds a new one, prevents adding mulitple with many clicks
      if (selected) {
        //the user needs to be able to remove the new object if they click on it again enabling them to remove the account they added.
        const selectedInstance: any = Object.values(main_reducer).find((b: any) => b.reg === d.reg.toLowerCase()) //searches the main reducer to find the matching object to be removed
        remove(selectedInstance.id) //removes it from the main reducer
        set("selectedId", "ui_reducer", "")
      }
      if (d.label === "none") {
        //the user needs to be able to remove the new object if they click on it again enabling them to remove all accounts added
        const selectedInstances: any = Object.values(main_reducer).filter((b: any) => b.id.includes("user1Savings")) //searches the main reducer to find the matching object to be removed
        selectedInstances.map((instance: I.instance) => remove(instance.id))
        set("selectedId", "ui_reducer", "")
      }
    },
    //onClick: reg => createStream(colorIndex, newSavingsStream(reg, +user1BirthYear + 65), set, `savings`, "user1"),
  })
  //  ------ADD TO SAVINGS STREAMS TO ARRAY
  //  Here need to map through all the savings streams and add them to the primary questions.

  insertQuestionArray("user1Savings", "user1", remove, set, state, "savings", _questions)

  // ------ ASK IF THEIR SPOUSE HAS INVESTMENTS
  if (maritalStatus === "married" || maritalStatus === "common-law") {
    _questions.push({
      data: "user2Savings",
      optionArray: savingsAccountsArray,
      arrayOfSelected: Object.values(main_reducer).filter((d: any) => d.id.includes(`user2Savings`)),
      explanation: "We'll use this info to see how much income in retirement your investments will provide",
      component: "PickMultipleOptions",
      user: "user2",
      valid: true,
      question: `Does ${_.startCase(user2Name)}  have investments?`,
      nextHandleChange: () => {
        set('selectedUser', 'ui_reducer', 'user2')},
      handleChange: (selected, d: any) => {
        if (!selected && d.label !== "none") {
          // check if the item doesnt already exist, or its not none, and will then create a new income st
          createStream(colorIndex, set, `savings`, d.reg.toLowerCase(), "user2", state)
        } //checks if there is no currently selected version, if so it adds a new one, prevents adding mulitple with many clicks
        if (selected) {
          //the user needs to be able to remove the new object if they click on it again enabling them to onClick2 the account they added.
          const selectedInstance: any = Object.values(main_reducer).find((b: any) => b.reg === d.reg.toLowerCase()) //searches the main reducer to find the matching object to be removed
          remove(selectedInstance.id) //removes it from the main reducer
          set("selectedId", "ui_reducer", "")
        }
        if (d.label === "none") {
          //the user needs to be able to remove the new object if they click on it again enabling them to onClick2 the account they added.
          const selectedInstances: any = Object.values(main_reducer).filter((b: any) => b.id.includes("user2Savings")) //searches the main reducer to find the matching object to be removed
          selectedInstances.map(instance => remove(instance.id))
          set("selectedId", "ui_reducer", "")
        }
      },
    })
    // ------ADD TO SPOUSE'S INCOME STREAMS TO ARRAY
    //Here need to map through all the spouse streams and add them to the primary questions.
    insertQuestionArray("user2Savings", "user2", remove, set, state, "savings", _questions)
  }

  _questions.push({
    data: "user1IncomeChart4",
    component: "chart",
    chart: "IncomeChart",
    valid: true,
  })

  _questions.push({
    data: "property",
    component: "DualSelect",
    option1: "yes",
    option2: "no",
    valid: true,
    value: ui_reducer.dualSelectValue,
    handleChange: () => {
      set("dualSelectValue", "ui_reducer", true)
      set("ownHome", "user_reducer", true)
      createStream(colorIndex, set, "property", "employment", "user1", state)
    },
    handleChange2: () => set("dualSelectValue", "ui_reducer", false),
  })


  if (ownHome) {
    //------ADD PROPERTY ARRAY TO MAIN ARRAY.
    insertQuestionArray("Property", "user1", remove, set, state, "property", _questions)
  }

  _questions.push({
    data: "debt",
    component: "DualSelect",
    option1: "yes",
    option2: "no",
    valid: true,
    value: user_reducer.hasUnsecuredDebt,
    handleChange: () => {
      set("hasUnsecuredDebt", "user_reducer", true)
      createStream(colorIndex,  set, "debt", "Credit Card", "user1", state)
    },
    handleChange2: () => set("hasUnsecuredDebt", "user_reducer", false),
  })

  if (hasUnsecuredDebt) {
    //------ADD Unsecured debt ARRAY TO MAIN ARRAY.
    insertQuestionArray("Debt", "user1", remove, set, state, "debt", _questions)
  }

  _questions.push({
    data: "debt",
    component: "DualSelect",
    option1: "yes",
    option2: "no",
    valid: true,
    value: user_reducer.hasUnsecuredDebt,
    handleChange: () => {
      set("hasUnsecuredDebt", "user_reducer", true)
      createStream(colorIndex,  set, "debt", "Credit Card", "user1", state)
    },
    handleChange2: () => set("hasUnsecuredDebt", "user_reducer", false),
  })
  
  _questions.push({
    data: "debt",
    component: "DualSelect",
    option1: "yes",
    option2: "no",
    valid: true,
    value: user_reducer.hasUnsecuredDebt,
    handleChange: () => {
      set("hasUnsecuredDebt", "user_reducer", true)
      createStream(colorIndex,  set, "debt", "Credit Card", "user1", state)
    },
    handleChange2: () => set("hasUnsecuredDebt", "user_reducer", false),
  })


  const questions =  _questions.map(d => ({...d, ...data[d.data]}))
console.log('questions:', questions)
  return {
    streamType: "Onboarding",
    questions,
    exitButtonProps: {
      handleChange: () => {
        set("selectedId", "ui_reducer", "")
        set("newStream", "ui_reducer", false)
      },
    },
    backButtonProps: {
      handleChange: () => set("progress", "ui_reducer", progress > 0 ? progress - 1 : 1),
    },
  }
}
