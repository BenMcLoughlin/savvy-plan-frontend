import { createStream } from "services/create_functions"
import { createDebtSliders, createMortgageSliders, createTripleSliders, createPropertySliders, createSavingsSliders } from "services/questions/createTripleSliders"
import * as I from "types"

export const createStreamQuestionsArray = (data: I.questions, instance: I.instance, set: I.set, state: I.state, remove: I.remove, user: I.user) => {
  const { streamType, q1, q2, q3, qFinal } = data

  const { id, owner, reg } = instance

  const { ui_reducer, main_reducer } = state

  const { maritalStatus, user1Name, user2Name } = state.user_reducer

  const { colorIndex } = state.ui_reducer

  const questions: any = []

  if (streamType !== "savings") {
    questions.push(
      //QUESTION 1 - Input Name of the new stream
      {
        component: "TextInput",
        explanation: q1.explanation,
        label: q1.label,
        placeholder: q1.placeholder,
        question: q1.question,
        type: "text",
        valid: true,
        handleChange: (value: string) => set(id, "main_reducer", value, "name"),
      }
    )
  }

  if (streamType !== "savings") {
    questions.push({
      //QUESTION 2 - Select registration of the new stream
      optionArray: q2.optionArray, // these values can be selectd by the multi select and will be attached as "reg", for "registration", to the income object
      explanation: q2.explanation,
      component: "PickSingleOption",
      question: q2.question,
      textInput: true,
      valid: reg.length > 1,
      value: reg,
      handleChange: (value: string) => set(id, "main_reducer", value.toLowerCase(), "reg"),
    })
  }

  if (streamType === "savings") {
    questions.push({
      //SAVINGS QUESTION 1 - Input current value of account
      ask: "Just an approximation of the current value is helpful. ",
      bottomLabel: `in my ${reg.toUpperCase()}`,
      component: "Slider",
      max: 300000,
      min: 0,
      step: 1000,
      topLabel: "I have around ",
      title: `How much do you currently have in your ${reg.toUpperCase()}?`,
      selectedFocus: true,
      value: instance[`currentValue`],
      valid: true,
      nextHandleChange: () => {
        set('savingsTransaction', 'ui_reducer', 'contribute')},
      handleChange: (value: string) => {
        set("dualSelectValue", "ui_reducer", true)
        set("selectedAccount", "ui_reducer", instance.reg)
        set(id, "main_reducer", value, "currentValue")},
    })
  }

  if (streamType === "property" && (maritalStatus === "married" || maritalStatus === "common-law")) {
    //QUESTION 3 - PROPERTY Select owner of the property
    questions.push({
      explanation: q3.explanation,
      component: "TripleSelector",
      question: q3.question,
      textInput: true,
      valid: true,
      value: owner,
      user1Name,
      user2Name,
      handleChange: (value: string) => set(id, "main_reducer", value.toLowerCase(), "owner"),
    })
  }

  if (streamType === "savings") {
    questions.push({
    data: `${user}SavingsChart1`,
    component: "chart",
    chart: "SavingsChart",
    valid: true,
    nextHandleChange: () => set('savingsTransaction', 'ui_reducer', 'withdraw'),
    editChart: createSavingsSliders(data, instance, set, state)
    })
  }

  if (streamType === "savings") {
    questions.push({
    data: `${user}SavingsChart2`,
    component: "chart",
    chart: "SavingsChart",
    valid: true,
    editChart: createSavingsSliders(data, instance, set, state),
    backHandleChange: () => {
      console.log('hellp:')
      set('savingsTransaction', 'ui_reducer', 'contribute')},
    nextHandleChange: () => {
      set('selectedUser', 'ui_reducer', 'user2')
      set('savingsTransaction', 'ui_reducer', 'contribute')
    },
    })
  }

  if (streamType === "income") {
    questions.push(createTripleSliders(data, instance, set, state))
  }

  if (streamType === "property") {
    questions.push(createPropertySliders(instance, set))
    questions.push(createMortgageSliders(instance, set))
  }

  if (streamType === "debt") {
    questions.push(createDebtSliders(instance, set))
  }

  //FINAL QUESTION- Ask if they would like to add another

  if ( streamType === "income" || streamType === "spending") {
    questions.push({
      component: "DualSelect",
      explanation: qFinal.explanation,
      option1: "yes",
      option2: "no",
      value: ui_reducer.dualSelectValue,
      valid: true,
      question: qFinal.question,
      handleChange: () => {
        set("dualSelectValue", "ui_reducer", true)
        createStream(colorIndex, set, streamType, "", owner, state)
      },
      handleChange2: (value, clickFired: boolean) => {
        set("newStream", "ui_reducer", false)
        set("selectedId", "ui_reducer", false)
        set("selectedPeriod", "ui_reducer", 0)
        if (clickFired) {
          const latestValue = Object.values(main_reducer)
            .sort((a, b) => +b.createdAt - +a.createdAt)
            .reverse()[0] //sorts by date to find most recent stream
          remove(latestValue.id) //removes it
        }
        set("dualSelectValue", "ui_reducer", false)
      },
    })
  }

  return {
    streamType,
    questions,
  }
}
