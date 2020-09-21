import * as I from "types"
import { StringDecoder } from "string_decoder";

interface IinfoCards {
  label: "insights" | "action steps"
  array: string[]
}

interface IsideNav {
  handleChange: (value: I.streamType) => void
  value: I.streamType
  options: I.streamType[]
}

interface IaddPrompt {
  handleChange: () => void
  label: string
}

interface ItripleSelector {
  user1Name: string
  user2Name: string
  value: string
  handleChange: (value: string) => void
}

export interface pages {
  addButtonLabel
  editPeriod: object
  chart: I.chartType, //determines the chart that will be rendered
  editPanel: string //tells <Display> which edit component to use
  streamType: I.streamType
  sideNav: IsideNav
  addPrompt: IaddPrompt
  tripleSelector: ItripleSelector
  infoCards: IinfoCards[]
}

interface  Iquestion {
  explanation: string
  label?: string
  optionArray?: string[]
  placeholder?: string
  question: string
}

interface Islider extends Iquestion {
  topLabelPast: string
  topLabelFuture: string
  bottomLabel: string
}

export interface questions {
  streamType: I.streamType
  q1: Iquestion
  q2: Iquestion
  q3: Iquestion
  qFinal: Iquestion
  slidersInput: Islider
}

export type onboardQuestions = Iquestion[]
