import React, { FC } from "react"
import styled from "styled-components"
import { TextInput, LinkButton } from "components"
import * as I from "types"

interface IProps {
  set: I.set
  state: I.state
}

export const Login: FC<IProps> = ({set, state}) => {
  const {newUser} = state.user_reducer
  return (
    <PageSize>
            <AngleDiv/>
    <Wrapper>

      <TextInput label="email" handleChange={() => null} valid={true} value="hi" type="text" />
      <TextInput label="password" handleChange={() => null} valid={true} value="hi" type="password" />
      {
        newUser &&
        <TextInput label="password confirm" handleChange={() => null} valid={true} value="hi" type="password" />
      } 
      <LinkButton label="Sign Up" link="onboarding" handleChange={() => set("newUser", "ui_reducer", false)}/>
      <H4>Forgot password?</H4>
    </Wrapper>
    </PageSize>

  )
}

//-----------------------------------------------style-----------------------------------------------//

const PageSize = styled.div`
 height: 100%;
 width: 100%;
`

const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 30%;
  width: 56rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const AngleDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #88ADBF;
  clip-path: polygon(0 0,50% 0,100% 50%,100% 100%,62% 100%,0 33%);
`

const H4 = styled.h4`
  color: white;
  font-weight: bold;
`