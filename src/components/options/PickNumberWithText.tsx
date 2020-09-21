import React, { FC } from "react"
import styled from "styled-components"
import { PickNumber, TextInput } from "components"
import _ from "lodash"
import { TransitionGroup, CSSTransition } from "react-transition-group"

interface IProps {
  handleChange: (selected: any, value: string) => void
  handleChange2: (event: any, childId: string) => null
  value: number
}

export const PickNumberWithText: FC<IProps> = ({ handleChange, handleChange2, value }) => {
  return (
    <Wrapper>
      <PickNumber handleChange={handleChange} value={value} />
      <TextBoxes>
        <TransitionGroup>
          {_.range(1, value + 1).map(d => (
            <CSSTransition key={d} timeout={300} classNames={`transition`}>
              <TextInput handleChange={e => handleChange2(e, `child${d}BirthYear`)} type="year" label={`childNumber${d}BirthYear`} valid={true} value={"value"} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </TextBoxes>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 50rem;
  width: 40rem;
`
const TextBoxes = styled.div`
  min-height: 60rem;
  width: 30rem;
  display: flex;
  flex-wrap: start;
  flex-direction: column;
  position: absolute;
  top: 8rem;

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`
