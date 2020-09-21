import React, { FC } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { ArrowLeftS } from '@styled-icons/remix-line'

interface IProps {
  periods: number
  position: number
  handleChange: (position: number) => void
  setDirection: (direction: string) => void
}

export const ScrollCircles: FC<IProps> = ({periods, position, handleChange,  setDirection}) => {

  return (
    <Wrapper>
      <ArrowLeft
        onClick={() => {
          handleChange(position > 0 ? position - 1 : 0)
          setDirection('back')
        }}
      />
      {_.range(1, periods + 1).map((d, i) => (
        <Circle key={i} selected={i === position} onClick={() => handleChange(i)} />
      ))}
      <ArrowRight
        onClick={() => {
          handleChange(position < periods ? position + 1 : periods - 1)
          setDirection('forward')
        }}
      />
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  font-size: 1.6rem;
  padding: 2rem;
  height: 4rem;
  display: flex;
  align-content: center;
  align-items: center;
  width: 20rem;
  justify-content: space-around;
`

interface ICircle {
  selected: boolean
}

const Circle = styled.div<ICircle>`
  background: ${(props) => (props.selected ? props.theme.color.darkGrey : props.theme.color.lightGrey)};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  &:after {
    content: '';
    height: 2rem;
    width: 2rem;
    background: green;
  }
`

const ArrowLeft = styled(ArrowLeftS)`
  height: 2.2rem;
  width: 2.2rem;
  color: ${props => props.theme.color.mediumGrey};
  cursor: pointer;
`

const ArrowRight = styled(ArrowLeftS)`
  height: 2.2rem;
  width: 2.2rem;
  color: ${props => props.theme.color.mediumGrey};
  cursor: pointer;
  transform: rotate(180deg);
`
