import React, { FC, useState } from "react"
import styled from "styled-components"
import * as components from "components"
import { ProgressBar, Next, Back } from "components"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Redirect } from "react-router-dom"
import { matchThenShowComponent } from "services/display_functions"
import { nextButtonProps, backButtonProps } from "services/questions/question_functions"
import * as I from "types"

interface IProps {
  set: I.set
  remove: I.remove
  state: I.state
  data: any
}

export const Questions: FC<IProps> = ({ data, state, set }) => {
  const { progress } = state.ui_reducer
  const [direction, setDirection] = useState<string>("forward")
  const { questions } = data
  const { length } = questions

  const nextProps = nextButtonProps(progress, questions, state, set)
  const backProps = backButtonProps(progress, set)

 console.log('data.questions[progress]:', data.questions[progress].editChart)
  if (progress === length - 2) return <Redirect to="/plan" />

  return (
    <Wrapper>
      <ProgressBar length={length} progress={progress} />
      <Text>
        {progress > 0 && <h3 style={{ fontWeight: "bold" }}>Why we Ask</h3>}
        <h4>{questions[progress].explanation}</h4>
      </Text>
      <TransitionGroup>
        {questions.map(
          (data: any, i: number) =>
            i === progress && (
              <CSSTransition key={i} timeout={1000} classNames={`transition-${direction}`}>
                <Content>
                  <Header>
                    <H2>{data.question}</H2>
                    <h3>{data.subTitle}</h3>
                  </Header>
                  <Component>{matchThenShowComponent(components, data, data.component)}</Component>
                </Content>
              </CSSTransition>
            )
        )}
      </TransitionGroup>
      {progress > 0 && <Back {...backProps} setDirection={setDirection} backHandleChange={data.questions[progress].backHandleChange} />}
      <Next {...nextProps} nextHandleChange={data.questions[progress].nextHandleChange} setDirection={setDirection} />
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 100%rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  position: absolute;
  margin-top: 10rem;
  margin-left: -40rem;
  height: 40rem;
  width: 70rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Component = styled.div`
  position: absolute;
  top: 10rem;
  left: 0rem;
  width: 80rem;
  justify-content: center;
  display: flex;
`
const Text = styled.div`
  height: 20rem;
  width: 20rem;
  display: flex;
  flex-wrap: flex-start;
  flex-direction: column;
  position: absolute;
  left: 10rem;
  top: 25rem;
`

const Header = styled.div`
  position: absolute;
  top: 2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`
const H2 = styled.h2`
  margin-bottom: 2rem;
  width: 80rem;
`
