import { TreducerID } from "types/reducer_types"
import { AnyARecord } from "dns"

type Icomponents = "DualSelect" | "Button" | "PickMultipleOptions" | "PickNumber" | "PickSingleOption" | "Slider" | "TextInput" | "TwoSliders" | ""
type Ireducers = "main_reducer" | "ui_reducer" | "user_reducer"

export interface ICoreProps {
  explanation?: string
  chart?: string
  component: Icomponents
  comment?: string
  subTitle?: string
  question: string
  valid?: boolean
  handleChange: any
  label?: string
}

export interface IButton extends ICoreProps {
  
}

export interface IPickMultipleOptions extends ICoreProps {
  optionArray: any
  user: string
  arrayOfSelected: any
}

export interface IDualSelect extends ICoreProps {
  option1: string | number
  option2: string | number
  handleChange2?: any
}

export interface IMultiSliders extends ICoreProps {
  num: number
}
export interface IPickNumber extends ICoreProps {
  value: number
}

export interface IPickSingleOption extends ICoreProps {
  optionArray: any
  textInput: boolean
}

export interface ISlider extends ICoreProps {
  explanation: string
  bottomLabel?: string
  max: number
  min?: number
  step: number
  topLabel: string
  question: string
  type?: string
}

interface ISingleSlider {
  bottomLabel?: string
  max: number
  step: number
  id: string
  topLabel: string
  reducer: string
  type?: string
}

export interface ITwoSliders extends ICoreProps {
  props1: ISingleSlider
  props2: ISingleSlider
}

export interface ITextInput extends ICoreProps {
  placeholder: string
  type: string
}

export type IComponents = IButton | IMultiSliders | IPickMultipleOptions | IDualSelect | ITwoSliders | ITextInput | IPickNumber | IPickSingleOption | ISlider
