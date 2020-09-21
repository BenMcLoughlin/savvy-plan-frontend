import React, { FC, useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { LinkButton } from "components"
import { set } from "redux/actions"
import * as I from "types"

interface IProps {
  set: I.set
}

export const LandingPage: FC<IProps> = ({ set }) => {
  const [enter, setEnter] = useState(false)
  useEffect(() => {
    setEnter(true)
  }, [])

  return (
    <Wrapper>
      <Title enter={enter}>
        <CSSTransition in={enter} timeout={2000} classNames={`transition-forward`}>
          <h1>See your financial future</h1>
        </CSSTransition>
        <CSSTransition in={enter} timeout={2000} classNames={`transition-back`}>
          <SubTitle>
            <h2>We do the math you make the decisions</h2>
            <LinkButton link="/login" label="Get Started" handleChange={() => set("newUser", "user_reducer", true)} />
          </SubTitle>
        </CSSTransition>
      </Title>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 30rem;
  display: grid;
  grid-template-columns: 40rem 60rem;
  grid-template-rows: 37rem 30rem;
  grid-template-areas:
    "a b"
    "c b";
`

interface Ienter {
  enter: boolean
}

const Title = styled.div<Ienter>`
  display: ${props => (props.enter ? "visible" : "hidden")};
  margin-top: 10rem;
  grid-area: b;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30rem;
`
const SubTitle = styled.div`
  height: 10rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`
