import React, { FC, useState } from "react"
import styled from "styled-components"
import { AddPrompt, MultiSliders, ScrollCircles } from "components"
import { TransitionGroup, CSSTransition } from "react-transition-group"

interface ISliderProps {
  addLabel: string
  num: number
  periods: number
  slidersArray: any
  handleChange: () => void
  handlePeriodChange: (value: number) => void
  selectedPeriod: number
}

export const TripleSliderSelector: FC<ISliderProps> = ({ addLabel, periods, handleChange, handlePeriodChange, selectedPeriod, slidersArray }) => {
  const [direction, setDirection] = useState<string>("forward")

  return (
    <Wrapper>
      <TransitionGroup>
        {slidersArray.map(
          (d, i) =>
            i === selectedPeriod && (
              <CSSTransition key={i} timeout={1000} classNames={`transition-${direction}`}>
                <Center>
                  <MultiSliders key={i} {...d} />
                </Center>
              </CSSTransition>
            )
        )}
      </TransitionGroup>
      <Change>
        <ScrollCircles periods={periods + 1} handleChange={value => handlePeriodChange(value)} setDirection={setDirection} position={selectedPeriod} />
        <AddPrompt
          handleChange={() => {
            handleChange()
            handlePeriodChange(periods + 1)
          }}
          label={addLabel}
        />
      </Change>
    </Wrapper>
  )
}

//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 22rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Center = styled.div`
  position: absolute;
  display: flex;
  top: 2%;
  left: 10%;
`

const Change = styled.div`
  width: 47rem;
  height: 4rem;
  display: flex;
  position: absolute;
  top: 70%;
  left: 20%;
`
