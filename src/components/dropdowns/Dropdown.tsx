import React, { FC, useState } from "react"
import styled from "styled-components"

interface IProps {
  optionArray: string[]
  handleChange: (option) => void
  selectedValue: string
}

export const Dropdown: FC<IProps> = ({ optionArray, handleChange, selectedValue }) => {
  const [open, toggleOpen] = useState<boolean>(false)
  return (
    <Wrapper>
      <Input onChange={e => e} type="text" autoComplete="off" value={selectedValue} onClick={() => toggleOpen(!open)}></Input>
      {open && (
        <DropDown>
          {optionArray.map((option: string) => {
            return (
              <Square
                selected={false}
                onClick={() => {
                  handleChange(option)
                  toggleOpen(false)
                }}
              >
                {option}
              </Square>
            )
          })}
        </DropDown>
      )}
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 3rem;
  width: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 1rem;
`

const Input = styled.input`
  height: 3rem;
  padding-left: 1.5rem;
  width: 12rem;
  outline: none;
  background-color: ${props => props.theme.color.primary};
  color: white;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  border-radius: 15px;
  &:focus {
    background: ${props => props.theme.color.darkGrey};
  }
`

const DropDown = styled.div`
  position: absolute;
  width: 11rem;
  top: 3rem;
  left: 5.6rem;
  background: none;
  z-index: 250;
  overflow: hidden;
  display: flex;
  flex-wrap: start;
  flex-direction: column;
  overflow: scroll;
`
interface ISquare {
  selected: boolean
}

const Square = styled.div<ISquare>`
  width: 100%;
  padding: 0.4rem;
  height: 3rem;
  display: flex;
  align-content: center;
  padding-left: 1rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.color.darkGrey};
  color: white;
  border: 0.5px solid #e0dedd;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.darkGrey};
    color: white;
  }
  &:nth-child(1) {
    border-radius: 0;
  }
  &:nth-last-child(1) {
    border-radius: 0 0 10px 10px;
  }
`
