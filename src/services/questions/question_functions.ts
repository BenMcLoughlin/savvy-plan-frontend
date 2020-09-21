import * as hardData from "data/questions_data"
import { createStreamQuestionsArray } from "services/questions/createQuestionArray"
import * as I from "types"

const convertObjectIntoArray = (object: I.state) => Object.values(object)
const filterArrayToMatchQuery = (array, query) => array.filter((d: any) => d.id.includes(query))

export const insertQuestionArray = (query, user: I.user, remove: I.remove, set: I.set, state, streamType: I.streamType, mainQuestionsArray) => {
  const questionData = hardData[`${streamType}Questions_data`] //match the function that creates the array with the query, eg "incomeQuestions"

  const stateAsArray = convertObjectIntoArray(state.main_reducer)

  const stateTrimmedToQueryStreams = filterArrayToMatchQuery(stateAsArray, query) //matches all "user2Income" streams

  stateTrimmedToQueryStreams.map(stream => {
    const arrayOfStreamQuestions = createStreamQuestionsArray(questionData, stream, set, state, remove, user) //creates a question array for each stream
    const addStreamQuestionsToMainArray = arrayOfStreamQuestions.questions.map(question => mainQuestionsArray.push(question))
    return addStreamQuestionsToMainArray
  })
}

export const savingsAccountsArray = [
  {
    label: "tax free savings account",
    reg: "TFSA",
    info:
      "The TFSa enables you to  avoid taxes on the gains you make. If you invest $100 right now and it becomes $1000 by the time you retire, that $900 you'll have earned is tax-free. You can also take money out any time you want. There is no penalty to withdraw - and if you do, the amount is added to how much you can contribute the following year.",
  },
  {
    label: "registered retirement savings",
    reg: "RRSP",
    info:
      "A popular retirement account designed to help Canadians save for retirement. The money you contribute to your RRSP is “pre-tax.” That means that you can subtract the amount you contribute from your income and pay less in income taxes. If you made $60,000 and you contributed $5,000 to your RRSP, you will pay tax on only $55,000 of income.",
  },
  {
    label: "personal",
    reg: "Personal",
    info:
      "Personal accounts are investment accounts that are taxable. They don't have government benefits like tax savings or deferrals, but there are no restrictions on when and how you can withdraw money",
  },
  {
    label: "Locked in Retirement Account",
    reg: "LIRA",
    info:
      "Personal accounts are investment accounts that are taxable. They don't have government benefits like tax savings or deferrals, but there are no restrictions on when and how you can withdraw money",
  },
  {
    label: "Pension",
    reg: "Pension",
    info:
      "Personal accounts are investment accounts that are taxable. They don't have government benefits like tax savings or deferrals, but there are no restrictions on when and how you can withdraw money",
  },
  {
    label: "RESP",
    reg: "RESP",
    info:
      "A popular savings account for parents or family members to save money for their children's education. With an RESP, the government will match your contributes and anything you earn through investing is earned tax-free. As always, there are rules and limitations.",
  },
  { label: "none", reg: "none" },
]

export const nextButtonProps = (progress, questions, state, set) => {
  return {
    handleChange: (setDirection, valid) => {
      setDirection("forward")
      if (valid) {
        set("progress", "ui_reducer", progress + 1)
      }
    },
    valid: questions[progress].valid,
    state,
  }
}

export const exitButtonProps = set => {
  return {
    handleChange: () => {
      set("selectedId", "ui_reducer", "")
      set("newStream", "ui_reducer", false)
    },
  }
}

export const backButtonProps = (progress, set) => {
  return {
    handleChange: () => set("progress", "ui_reducer", progress > 0 ? progress - 1 : 1),
  }
}
