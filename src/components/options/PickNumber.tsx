import React, { FC, useState } from "react"
import styled from "styled-components"
import _ from "lodash"
import { AddButton } from "components/buttons/AddButton"

interface IProps {
  value: number
  handleChange: any
}

export const PickNumber: FC<IProps> = ({ handleChange, value }) => {

  const [topNumber, setTopNumber] = useState<number>(4)

  return (
    <Wrapper>
      {_.range(1, topNumber).map(number => (
        <Number selected={number === value} onClick={() => handleChange(number)}>
          {number}
        </Number>
      ))}
      <AddWrapper>
        <AddButton
          handleChange={() => {
            setTopNumber(topNumber + 1)
          }}
        />
      </AddWrapper>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 5rem;
  min-width: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
interface NProps {
  selected: boolean
}

const Number = styled.div<NProps>`
  height: 5rem;
  min-width: 5rem;
  background-color: ${props => (props.selected ? props.theme.color.darkGrey : "none")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.selected ? props.theme.color.white : props.theme.color.darkGrey)};
  font-size: ${props => props.theme.fontSize.smallMedium};
  font-weight: bold;
  cursor: pointer;
`
const AddWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
