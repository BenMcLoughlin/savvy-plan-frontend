import React, {FC} from "react"
import styled from "styled-components"
import logo from "assets/logo.svg"
import { HeaderNav, LinkButton } from "components"
import { Link } from "react-router-dom"
import * as I from "types"

interface IProps {
  set: I.set
  state: I.state
}

export const Header: FC<IProps> = ({set, state}) => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} height="100%" width="100%" alt="logo" />
      </Logo>
      <HeaderNav handleChange={() => null} value="about" options={["1"]}></HeaderNav>
      <Login>
        <H3 to="/login" onClick={() => set("newUser", "user_reducer", false)}>Log in</H3>
        <LinkButton link="/login" label="Get Started" handleChange={() => set("newUser", "user_reducer", true)} />
      </Login>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 6.5rem;
  width: 100%;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  position: relative;
`
const Logo = styled.div`
  height: 7.5rem;
  position: absolute;
`
const Login = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23rem;
  font-weight: 600;
`
const H3 = styled(Link)`
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: grey;
  font-size: 1.6rem;
`
