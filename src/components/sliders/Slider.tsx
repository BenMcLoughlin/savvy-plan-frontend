import React, { FC, useState } from "react"
import styled from "styled-components"

interface ISliderProps {
  bottomLabel: string
  max: number
  min: number
  step: number
  topLabel: string
  title: string
  type?: string
  handleChange: any
  value: number
  selectedFocus?: boolean
}

export const Slider: FC<ISliderProps> = ({ min, handleChange, topLabel, bottomLabel, type, max, selectedFocus, step, value}) => {

  const [focus, setFocus] = useState(false)

  return (
    <Wrapper>
      <Label>{topLabel}</Label>
      <Value
        type="text"
        autoFocus = {selectedFocus ? selectedFocus : false}
        onFocus={e => {
          e.target.select()
          setFocus(true)
        }}
        onBlur={() => setFocus(false)}
        autoComplete="off"
        onChange={e => {
          const value =  e.target.value.replace(",", "").replace("%", "")
          handleChange(type === "percentage" ? value : +value)}
        }
        value={type === "percentage" && !focus ? `${value}%` : type === "year" ? value : value.toLocaleString()}
      />
      <RangeBar
        type="range"
        onChange={e => handleChange(+e.target.value)}
        value={value}
        max={max}
        min={min}
        tabIndex="-1"
        step={step}
        percentage={`${((value - min) / (max - min)) * 100}%`} //the percentage is used to set the linear gradient, haveing two colors on either side of the selector circle thumb
      />
      <Label style={{ marginTop: "-1.4rem" }}>{bottomLabel}</Label>
    </Wrapper>
  )
}

//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-left: -3rem;
  position: relative;
  width: 20rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Label = styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.color.darkGrey};
  text-transform: capitalize;
`
interface IRange {
  percentage: string
  tabIndex: any
}

const RangeBar = styled.input<IRange>`
  width: 15rem;
  height: 2px;
  -webkit-appearance: none;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: all 1s ease;
  background: linear-gradient(90deg, ${props => "#707070 "} ${props => props.percentage}, ${props => "#C8C7C7"} ${props => props.percentage});
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border: 0.5px solid #707070;
    border-radius: 50%;
    cursor: pointer;
  }

  &:active::-webkit-slider-thumb {
    background: #707070;
  }
`

const Value = styled.input`
  margin-top: 1rem;
  text-align: center;
  padding: 0.3rem;
  width: 11rem;
  border-radius: 5px;
  color: #5a5758;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    background: lightGrey;
  }
  font-size: 2.3rem;
  outline: none;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// This is the entire rangebar wrapper that contains the label, the range bar input and the value output.
