import React, { FC } from "react"
import styled from "styled-components"
import _ from "lodash"

interface IProps {
  optionArray?: string[]
  handleChange: (d) => void
  textInput?: boolean
  value: string
}

export const PickSingleOption: FC<IProps> = ({ optionArray, handleChange, textInput, value }) => {
  return (
    <Wrapper>
      {optionArray &&
        optionArray.map((d: string, i: number) => {
          return (
            <Square key={i} selected={d.toLowerCase() === value} onClick={() => handleChange(d)} id={`${_.camelCase(d)}`}>
              {d}
            </Square>
          )
        })}
      {textInput && <Input onChange={e => handleChange(e.target.value)}></Input>}
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  width: 30rem;
  min-height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`

interface SProps {
  selected: boolean
}

// eslint-disable-next-line
const Square = styled.div<SProps>`
  width: 100%;
  padding: 1rem;
  min-height: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 600;
  background: ${props => (props.selected ? props.theme.color.primary : "white")};
  border: ${props => props.theme.border.primary};
  cursor: pointer;
  &:nth-child(1) {
    border-radius: 10px 10px 0 0;
  }
  &:nth-last-child(1) {
    border-radius: 0 0 10px 10px;
  }
  color: ${props => (props.selected ? "white" : props.theme.color.darkGrey)};
`

const Input = styled.input`
  background: none;
  background-color: white;
  ${props => props.theme.color.darkGrey}
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1.2rem;
  display: block;
  width: 100%;
  min-height: 5rem;
  border: ${props => props.theme.border.primary};
  border-radius: 3px;
  color: ${props => props.theme.color.darkGrey};
  border-radius: 0 0 10px 10px;
  &:focus {
    outline: none;
  }
`
