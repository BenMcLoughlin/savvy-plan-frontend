import React, { FC, useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { ArrowLeftS } from '@styled-icons/remix-line'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface IProps {
  label: string
  array: string[]
}

export const InfoCard: FC<IProps> = ({array, label}) => {
  const [position, setPosition] = useState<number>(0)
  const [direction, setDirection] = useState<string>('forward')

  const { length } = array

  return (
    <Wrapper>
      <Title>{label}</Title>
      <Content>
        <TransitionGroup>
          {array.map(
            (d, i) =>
              i === position && (
                <CSSTransition key={i} timeout={1000} classNames={`transition-${direction}`}>
                  <Text key={i}>{array[position]}</Text>
                </CSSTransition>
              )
          )}
        </TransitionGroup>
      </Content>
      <Selector>
        <ArrowLeft
          onClick={() => {
            setPosition(position > 0 ? position - 1 : 0)
            setDirection('back')
          }}
        />
        {_.range(1, array.length + 1).map((d, i) => (
          <Circle key={i} selected={i === position} onClick={() => setPosition(i)} />
        ))}
        <ArrowRight
          onClick={() => {
            setPosition(position < length ? position + 1 : length - 1)
            setDirection('forward')
          }}
        />
      </Selector>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 20rem;
  width: 30rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`

const Title = styled.div`
  font-size: 1.6rem;
  color: #5a5758;
  padding: 2rem;
  text-transform: capitalize;
`
const Content = styled.div`
  font-size: 1.6rem;
  color: #5a5758;
  padding: 2rem;
`
const Selector = styled.div`
  font-size: 1.6rem;
  padding: 2rem;
  position: absolute;
  top: 16rem;
  left: 6rem;
  height: 1rem;
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
  background: ${(props) => (props.selected ? '#5A5758' : '#dddddd')};
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
  color: #c8c7c7;
  cursor: pointer;
`

const ArrowRight = styled(ArrowLeftS)`
  height: 2.2rem;
  width: 2.2rem;
  color: #c8c7c7;
  cursor: pointer;
  transform: rotate(180deg);
`
const Text = styled.h3`
  position: absolute;
  top: 5rem;
  left: 2rem;
`
